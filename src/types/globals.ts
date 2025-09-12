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

export type TextSection = {
  title: string;
  description: string;
  button: string;
  flexReversed: boolean;
  textColor: string;
  textLocation: "left" | "right";
  image: string;
};

export type CustomColors =
  | "primaryBrown"
  | "secondaryBrown"
  | "primaryNude"
  | "lightNude"
  | "lighterNude";
