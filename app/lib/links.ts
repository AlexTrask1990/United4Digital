import { ILink } from "../types/definitions";

const united4GamesUrl =
  process.env.U4G_URL ?? "https://united4games.com";

export const externalLinks = {
  united4Games: united4GamesUrl,
} as const;

export const links: ILink[] = [
  { name: "About us", href: "/#about-us" },
  { name: "Publishers", href: "/#publishers" },
  { name: "Advertisers", href: "/#advertisers" },
  {
    name: "Media Buying & User Acquisition",
    href: "/#media-buying-and-user-acquisition",
  },
  { name: "Glossary", href: "/glossary" },
];
