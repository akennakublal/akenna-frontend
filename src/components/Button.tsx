import type { Button } from "../types/globals";
import clsx from "clsx";

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
  onClick,
}: ButtonProps) {
  const base =
    "font-body cursor-pointer transition-colors duration-300 flex items-center justify-center whitespace-nowrap rounded-lg px-6 py-1.5 text-sm xl:text-lg font-semibold";

  const bgStyles: Record<ButtonProps["backgroundColor"], string> = {
    primaryBrown: "bg-primaryBrown hover:bg-primaryBrown/80",
    secondaryBrown: "bg-secondaryBrown hover:bg-secondaryBrown/80",
    primaryNude: "bg-primaryNude hover:bg-primaryNude/80",
    lightNude: "bg-lightNude hover:bg-lightNude/80",
    lighterNude: "bg-lighterNude hover:bg-lighterNude/80",
    white: "bg-white hover:bg-white/80",
    black: "bg-black hover:bg-black/80",
    transparent: "bg-transparent",
  };

  const textStyles: Record<ButtonProps["textColor"], string> = {
    primaryBrown: "text-primaryBrown",
    secondaryBrown: "text-secondaryBrown",
    primaryNude: "text-primaryNude",
    lightNude: "text-lightNude",
    lighterNude: "text-lighterNude",
    white: "text-white",
    black: "text-black",
  };

  const className = clsx(
    base,
    bgStyles[backgroundColor],
    textStyles[textColor],
    otherStyles
  );

  if (url) {
    return (
      <a href={url} className={className}>
        {title}
      </a>
    );
  }

  if (title === "Send Message") {
    return (
      <button type="submit" onClick={onClick} className={className}>
        {title}
      </button>
    );
  }

  return (
    <div onClick={onClick} className={className}>
      {title}
    </div>
  );
}
