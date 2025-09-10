import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import type { DropdownLink } from "../types/globals";
import { useState } from "react";

export default function DropdownLink({ name, links }: DropdownLink) {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="flex gap-2 items-center cursor-pointer px-4 py-2 rounded-2xl transition-200 hover:bg-lightNude"
        onClick={() => setDropdownMenuOpen((prev) => !prev)}
      >
        <span>{name}</span>
        <InlineIcon icon="line-md:chevron-down" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${
          !dropdownMenuOpen && "hidden"
        } flex flex-col text-nowrap absolute top-12 -left-12 md:left-0  text-center md:text-left rounded-xl font-normal bg-lighterNude gap-4 px-12 py-8`}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              to={link.url}
              className="block hover:underline"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
