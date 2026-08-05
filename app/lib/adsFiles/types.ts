export type AdsFileId = "ads" | "app-ads";

export type AdsFileConfig = {
  content: string;
  updatedAt: string;
};

export const adsFileOptions: Array<{
  id: AdsFileId;
  label: string;
  publicPath: string;
  defaultContent: string;
}> = [
  {
    id: "ads",
    label: "ads.txt",
    publicPath: "/ads.txt",
    defaultContent: `#Buff Games
buff.game, 240807510, DIRECT
improvedigital.com, 2361, DIRECT
smartyads.com, 300231, DIRECT, fd2bde0ff2e62c5d
`,
  },
  {
    id: "app-ads",
    label: "app-ads.txt",
    publicPath: "/app-ads.txt",
    defaultContent: `#Buff Games
buff.game, 240807510, DIRECT
improvedigital.com, 2361, DIRECT
smartyads.com, 300231, DIRECT, fd2bde0ff2e62c5d
`,
  },
];

export const isAdsFileId = (value: unknown): value is AdsFileId => {
  return value === "ads" || value === "app-ads";
};

export const getAdsFileOption = (fileId: AdsFileId) => {
  const option = adsFileOptions.find((fileOption) => fileOption.id === fileId);

  if (!option) {
    throw new Error(`Unknown ads file: ${fileId}`);
  }

  return option;
};

export const defaultAdsFileConfig = (fileId: AdsFileId): AdsFileConfig => ({
  content: getAdsFileOption(fileId).defaultContent,
  updatedAt: new Date(0).toISOString(),
});
