export type DropdownLink = {
  name: string;
  links: Link[];
};

export type Link = {
  name: string;
  url: string;
};

export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin" | "tiktok" | "amazon";
  url: string;
  icon: string;
};