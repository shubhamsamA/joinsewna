"use client";
import {
  Navbar as RenderNavbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Chat",
      link: "/chat",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full font-bold z-50">
      <RenderNavbar>
        <NavBody>
          <NavbarLogo />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 hover:cursor-pointer">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-black hover:text-gray-700 hover:bg-gray-200 rounded-2xl p-3"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader className="flex justify-between items-right">
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="flex justify-between pl-4"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative pl-2 text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </RenderNavbar>
    </div>
  );
}
