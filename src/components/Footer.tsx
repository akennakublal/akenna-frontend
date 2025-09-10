import { Link } from "react-router-dom";
import Logo from "./Logo";
import type { SocialLink } from "../types/globals";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      platform: "tiktok",
      url: "/",
      icon: "line-md:tiktok",
    },
    {
      platform: "amazon",
      url: "/",
      icon: "mdi:amazon",
    },
    {
      platform: "linkedin",
      url: "/",
      icon: "line-md:linkedin",
    },
    {
      platform: "instagram",
      url: "/",
      icon: "line-md:instagram",
    },
    {
      platform: "facebook",
      url: "/",
      icon: "line-md:facebook",
    },
  ];
  return (
    <footer className="flex flex-col justify-center items-center px-16 py-8 gap-8 bg-white text-primaryBrown">
      {/* Logo */}
      <Logo />

      {/* Links */}
      <div className="flex gap-8">
        <Link to="/" className="hover:underline">
          About Me
        </Link>
        <Link to="/" className="hover:underline">
          Contact Me
        </Link>
        <Link to="/" className="hover:underline">
          Speaking
        </Link>
        <Link to="/" className="hover:underline">
          Coaching
        </Link>
      </div>

      {/* Socials */}
      <div className="flex gap-8">
        {socialLinks.map((socialLink) => {
          return <SocialIcon {...socialLink} />;
        })}
      </div>
    </footer>
  );
}
