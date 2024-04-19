import Logo from "@/app/ui/Header/Logo/Logo";
import { NavLinks } from "@/app/ui/Header/NavLinks/NavLinks";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";

export default function Header() {
  return (
    <header className="bg-primary h-86 flex items-center sticky top-0 z-10">
      <nav className="navbar justify-between px-10 w-11/12 laptop:px-0 items-center container mx-auto text-white">
        <Logo />
        <NavLinks />
        <DropdownMenu />
      </nav>
    </header>
  );
}
