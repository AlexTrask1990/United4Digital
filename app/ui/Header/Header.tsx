import Logo from "@/app/ui/Header/Logo/Logo";
import { NavLinks } from "@/app/ui/Header/NavLinks/NavLinks";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { externalLinks } from "@/app/lib/links";
import { United4GamesBrandLogo } from "@/app/ui/BrandLogo/BrandLogo";

export default function Header() {
  return (
    <header className="bg-primary h-86 flex items-center sticky top-0 z-10">
      <nav className="navbar justify-between px-10 w-11/12 laptop:px-0 items-center container mx-auto text-white">
        <div className="flex shrink-0 items-end gap-4 laptop:gap-6">
          <Logo />
          <a
            href={externalLinks.united4Games}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="United4Games home"
            className="hidden transition-opacity hover:opacity-85 laptop:block"
          >
            <United4GamesBrandLogo />
          </a>
        </div>
        <NavLinks />
        <DropdownMenu />
      </nav>
    </header>
  );
}
