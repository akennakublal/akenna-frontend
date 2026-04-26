import { useEffect, useState } from "react";
import Logo from "./Logo";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import DropdownLink from "./DropdownLink";
import Button from "./Button";
import { useNavbarContent } from "../hooks/useNavbarContent";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { navbarData, loading, error } = useNavbarContent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading, error, and empty state handling
  if (loading)
    return <Skeleton imageHeight="h-12" lines={1} className="mb-4" />;
  if (error) return <div>{error}</div>;
  if (!navbarData) return <div>No nav data</div>;

  // Separate parent pages (no parent relation)
  const parents = navbarData.filter((page) => !page.parent);

  // Map children to their parent title
  const childrenMap = navbarData.reduce<Record<string, typeof navbarData>>(
    (acc, page) => {
      if (page.parent) {
        const parentTitle = page.parent.title;
        if (!acc[parentTitle]) acc[parentTitle] = [];
        acc[parentTitle].push(page);
      }
      return acc;
    },
    {},
  );

  // Toggle mobile menu open/close
  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <motion.nav
      className={`sticky top-0 left-0 z-99 font-body w-full flex flex-col lg:flex-row items-center justify-between px-8 xl:px-16 py-4 text-primaryBrown transition-all duration-500 ${
        scrolled
          ? "bg-lighterNude/80 backdrop-blur-md shadow-md"
          : "bg-lighterNude"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between lg:w-auto w-full">
        {/* Logo */}
        <Logo />

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-menu"
          aria-expanded={`${menuOpen}`}
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <InlineIcon
            icon={
              menuOpen ? "line-md:menu-to-close-alt-transition" : "line-md:menu"
            }
            className="text-2xl transition-all"
          />
        </button>
      </div>

      {/* Links */}
      <div
        id="main-menu"
        className={`${
          !menuOpen && "hidden lg:flex"
        } flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-2 lg:gap-8 xl:gap-16 transition-all duration-500 text-center xl:text-xl`}
      >
        {parents.map((parent) => {
          const children = childrenMap[parent.title] || [];

          if (children.length > 0) {
            return (
              <DropdownLink
                key={parent.title}
                name={parent.title}
                links={children.map((child) => ({
                  name: child.title,
                  url: `/${child.slug}`,
                }))}
              />
            );
          }

          return (
            <Link
              key={parent.title}
              to={`/${parent.slug}`}
              className="px-4 py-2 rounded-2xl transition-200 hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              {parent.title}
            </Link>
          );
        })}
      </div>

      {/* CTA Button: Only visible on large screens */}
      <Button
        title="Book a Session"
        url="/book-a-session"
        backgroundColor="primaryBrown"
        textColor="white"
        otherStyles="hidden lg:block"
      />
    </motion.nav>
  );
}
