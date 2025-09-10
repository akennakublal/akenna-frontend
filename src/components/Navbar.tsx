import { useState } from "react";
import Logo from "./Logo";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import type { DropdownLink as DropdownLinkType } from "../types/globals";
import DropdownLink from "./DropdownLink";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: DropdownLinkType[] = [
    {
      name: "Coaching",
      links: [
        {
          name: "1 on 1 Sessions",
          url: "/",
        },
        {
          name: "Corporate Sessions",
          url: "/",
        },
        {
          name: "Group Sessions",
          url: "/",
        },
      ],
    },
  ];

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }
  return (
    <nav className="sticky font-body w-full flex flex-col md:flex-row items-center justify-between px-8 lg:px-16 py-4 bg-lighterNude text-primaryBrown font-semibold text-lg">
      <div className="flex items-center justify-between md:w-auto w-full">
        {/* Logo */}
        <Logo />

        {/* Menu Icon */}
        <InlineIcon
          icon={
            menuOpen ? "line-md:menu-to-close-alt-transition" : "line-md:menu"
          }
          className="text-2xl md:hidden transition-all"
          onClick={toggleMenu}
        />
      </div>

      {/* Links */}
      <div
        className={`${
          !menuOpen && "hidden md:flex"
        } flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 md:gap-8 lg:gap-16 transition-all duration-500`}
      >
        <Link
          to="/"
          className="px-4 py-2 rounded-2xl transition-200 hover:bg-lightNude"
        >
          About Me
        </Link>
        <Link
          to="/"
          className="px-4 py-2 rounded-2xl transition-200 hover:bg-lightNude"
        >
          Contact Me
        </Link>
        <Link
          to="/"
          className="px-4 py-2 rounded-2xl transition-200 hover:bg-lightNude"
        >
          Speaking
        </Link>

        {/* Dropdown Links */}
        {links.map((dropdownLink) => {
          return <DropdownLink key={dropdownLink.name} {...dropdownLink} />;
        })}
      </div>

      {/* CTA */}
      <button className="hidden md:block bg-primaryBrown  px-6 py-1.5 rounded-lg text-white font-semibold">
        Book a Session
      </button>
    </nav>
  );
}
