import { Link } from "react-router-dom";
import type { Button } from "../types/globals";
import clsx from "clsx";
import { motion } from "framer-motion";

/**
 * Props for the Button component.
 * - `type`: "button" | "submit" | "link" (default: "button")
 * - `url`: If provided, renders a <Link> (internal) or <a> (external)
 * - `onClick`: Click handler for button
 * - `otherStyles`: Additional Tailwind classes
 */

type ButtonProps = Button & {
  otherStyles?: string;
  onClick?: () => void;
};

export default function Button({
  title,
  url,
  backgroundColor,
  textColor,
  otherStyles,
  type,
  onClick,
}: ButtonProps) {
  // Base Tailwind classes for all buttons
  const base =
    "font-body cursor-pointer transition-colors duration-300 flex items-center justify-center whitespace-nowrap rounded-lg px-6 py-1.5 text-sm xl:text-lg font-semibold";

  // Background color classes
  const bgStyles: Record<ButtonProps["backgroundColor"], string> = {
    primaryBrown: "bg-primaryBrown hover:bg-primaryBrown/80",
    secondaryBrown: "bg-secondaryBrown hover:bg-secondaryBrown/80",
    primaryNude: "bg-primaryNude hover:bg-primaryNude/80",
    lightNude: "bg-lightNude hover:bg-lightNude/80",
    lighterNude: "bg-lighterNude hover:bg-lighterNude/80",
    white: "bg-white hover:bg-gray-100",
    black: "bg-black hover:bg-black/80",
    transparent: "bg-transparent",
  };

  // Text color classes
  const textStyles: Record<ButtonProps["textColor"], string> = {
    primaryBrown: "text-primaryBrown",
    secondaryBrown: "text-secondaryBrown",
    primaryNude: "text-primaryNude",
    lightNude: "text-lightNude",
    lighterNude: "text-lighterNude",
    white: "text-white",
    black: "text-black",
  };

  // Compose all classes
  const className = clsx(
    base,
    bgStyles[backgroundColor],
    textStyles[textColor],
    otherStyles,
  );

  // Render internal link using react-router-dom
  if (url && url.startsWith("/")) {
    return (
      <motion.span
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link to={url} className={className}>
          {title}
        </Link>
      </motion.span>
    );
  }

  // Render external link
  if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
    return (
      <motion.a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.a>
    );
  }

  // Render button (default)
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      type={type !== "link" && type ? type : "button"}
      onClick={onClick}
      className={className}
    >
      {title}
    </motion.button>
  );
}
