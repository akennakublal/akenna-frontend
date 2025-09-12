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
  textColor: string;
  textLocation: "left" | "right";
  imageDirection: "left" | "right";
  image: string;
  cta?: Button;
};

export type CustomColors =
  | "primaryBrown"
  | "secondaryBrown"
  | "primaryNude"
  | "lightNude"
  | "lighterNude";

export type Event = {
  title: string;
  subtitle: string;
  date: string;
};

export type Button = {
  title: string;
  url?: string | null;
  backgroundColor: CustomColors | "white" | "black" | "transparent";
  textColor: CustomColors | "white" | "black";
};
