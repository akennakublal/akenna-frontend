import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import type { DropdownLink } from "../types/globals";
import { useState, useRef, useEffect } from "react";

/**
 * DropdownLink renders a button that toggles a dropdown menu of links.
 * - Accessible and keyboard-navigable.
 * - Responsive and styled with Tailwind.
 */
export default function DropdownLink({ name, links }: DropdownLink) {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState<boolean>(false);
  const menuId = `dropdown-menu-${name.replace(/\s+/g, "-").toLowerCase()}`;
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on Escape key or click outside
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownMenuOpen(false);
    }
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDropdownMenuOpen(false);
      }
    }
    if (dropdownMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Dropdown toggle button */}
      <button
        type="button"
        aria-label={name}
        aria-haspopup="menu"
        aria-expanded={dropdownMenuOpen}
        aria-controls={menuId}
        className="flex gap-2 items-center cursor-pointer px-4 py-2 rounded-2xl transition-200 hover:bg-lightNude"
        onClick={() => setDropdownMenuOpen((prev) => !prev)}
      >
        <span>{name}</span>
        <InlineIcon icon="line-md:chevron-down" />
      </button>

      {/* Dropdown Menu: Only render when open for ARIA compliance */}
      {dropdownMenuOpen && (
        <div
          id={menuId}
          role="menu"
          className="flex flex-col min-w-40 absolute top-12 left-0 text-center md:text-left rounded-xl font-normal bg-lighterNude gap-4 px-6 py-4 shadow-lg z-20"
        >
          {links.map((link) => (
            <Link
              aria-label={link.name}
              key={link.name}
              to={link.url}
              role="menuitem"
              className="text-base block hover:underline focus:outline-none focus:underline"
              tabIndex={0}
              onClick={() => setDropdownMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
