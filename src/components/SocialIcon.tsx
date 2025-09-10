import type { SocialLink } from "../types/globals";
import { InlineIcon } from "@iconify/react";
export default function SocialIcon({ platform, url, icon }: SocialLink) {
  return (
    <a
      title={platform}
      href={url}
      className="text-white bg-primaryBrown border-2 border-primaryBrown p-2 rounded-full
                 hover:bg-white hover:text-primaryBrown hover:scale-110 transition-all duration-300
                 flex items-center justify-center"
    >
      <InlineIcon icon={icon} className="text-2xl" />
    </a>
  );
}
