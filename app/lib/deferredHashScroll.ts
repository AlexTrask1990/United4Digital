export const DEFERRED_HASH_STORAGE_KEY = "__u4dDeferredHash";
export const DEFERRED_HASH_SCROLL_CLASS = "deferred-hash-scroll";

declare global {
  interface Window {
    __u4dDeferredHash?: string;
  }
}

const LAYOUT_STABLE_DURATION_MS = 150;
const LAYOUT_STABLE_TIMEOUT_MS = 8000;

export const captureDeferredHashScript = `
(function () {
  var hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  try {
    window.__u4dDeferredHash = hash;
    sessionStorage.setItem("${DEFERRED_HASH_STORAGE_KEY}", hash);
    document.documentElement.classList.add("${DEFERRED_HASH_SCROLL_CLASS}");
    history.replaceState(null, "", window.location.pathname + window.location.search);
  } catch (error) {}
})();
`;

const waitForWindowLoad = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }

    window.addEventListener("load", () => resolve(), { once: true });
  });

const waitForNextPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });

const waitForLayoutStable = () =>
  new Promise<void>((resolve) => {
    let lastHeight = document.documentElement.scrollHeight;
    let stableTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      clearTimeout(stableTimer);
      clearTimeout(timeoutTimer);
      observer.disconnect();
      resolve();
    };

    const timeoutTimer = setTimeout(finish, LAYOUT_STABLE_TIMEOUT_MS);

    const scheduleStableCheck = () => {
      clearTimeout(stableTimer);
      stableTimer = setTimeout(finish, LAYOUT_STABLE_DURATION_MS);
    };

    const observer = new ResizeObserver(() => {
      const currentHeight = document.documentElement.scrollHeight;

      if (currentHeight === lastHeight) return;

      lastHeight = currentHeight;
      scheduleStableCheck();
    });

    observer.observe(document.documentElement);
    scheduleStableCheck();
  });

export const scrollToHash = (hash: string) => {
  const targetId = hash.replace(/^#/, "");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return false;

  window.scrollTo({
    top: targetElement.getBoundingClientRect().top + window.scrollY,
    behavior: "instant",
  });
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}${hash}`,
  );

  return true;
};

export const finishDeferredHashScroll = () => {
  document.documentElement.classList.remove(DEFERRED_HASH_SCROLL_CLASS);
  delete window.__u4dDeferredHash;
};

export const readDeferredHash = () => {
  const sessionHash = sessionStorage.getItem(DEFERRED_HASH_STORAGE_KEY);

  if (sessionHash) return sessionHash;

  return window.__u4dDeferredHash ?? null;
};

export const clearDeferredHash = () => {
  sessionStorage.removeItem(DEFERRED_HASH_STORAGE_KEY);
  delete window.__u4dDeferredHash;
};

export const waitForPageContentReady = async () => {
  await waitForWindowLoad();
  await waitForNextPaint();
  await waitForLayoutStable();
};

export const scrollToDeferredHash = async (hash: string) => {
  document.documentElement.classList.add(DEFERRED_HASH_SCROLL_CLASS);

  await waitForPageContentReady();

  const didScroll = scrollToHash(hash);
  finishDeferredHashScroll();

  return didScroll;
};
