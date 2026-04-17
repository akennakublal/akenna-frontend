import { Link } from "react-router-dom";
import Logo from "./Logo";
import type { SocialLink } from "../types/globals";
import SocialIcon from "./SocialIcon";
import { useGlobalContent } from "../hooks/useGlobalContent";
import { useFooterContent } from "../hooks/useFooterContent";
import Skeleton from "./Skeleton";

export default function Footer() {
  const { globalData } = useGlobalContent();
  const { footerData, loading, error } = useFooterContent();

  // Loading, error, and empty state handling
  if (loading)
    return <Skeleton imageHeight="h-12" lines={1} className="mb-4" />;
  if (error) return <div>{error}</div>;
  if (!globalData) return null;
  if (!footerData) return <div>No footer data</div>;

  const socialLinks: SocialLink[] = globalData.socialLinks;

  return (
    <footer
      className="flex flex-col justify-center items-center px-4 md:px-16 py-8 gap-8 bg-white text-primaryBrown text-sm lg:text-base"
      aria-label="Site footer"
    >
      {/* Logo */}
      <Logo />

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-center">
          {footerData.map((page) => (
            <li key={page.documentId ?? page.title}>
              <Link
                to={`/${page.slug}`}
                className="text-nowrap hover:underline"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul
        className="flex justify-center items-center flex-wrap gap-8"
        aria-label="Social media links"
      >
        {socialLinks.map((socialLink) => (
          <li key={socialLink.platform}>
            <SocialIcon {...socialLink} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
