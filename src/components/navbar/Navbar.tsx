"use client";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
export const navItems = [
  {
    name: "Pricing",
    link: "/pricing"
  },
  {
    name: "Projects",
    link: "/projects"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];

const Navbar = () => {
  return (
    <div className="fixed left-1/2 z-50 mx-auto flex w-full -translate-x-1/2 flex-row items-center justify-between px-3 pt-3 sm:justify-center">
      <div className="hidden justify-center sm:flex">
        <DesktopNav navItems={navItems} />
      </div>

      <div className="flex w-full sm:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
