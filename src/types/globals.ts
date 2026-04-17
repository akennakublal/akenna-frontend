// Global site-wide content
export type GlobalContent = {
  siteName: string;
  logo: Logo;
  seoDefaults: Seo;
  socialLinks: SocialLink[];
  contactEmail: string;
  phoneNumber: string;
};

// Logo object, includes image and text
export type Logo = {
  logoImage: Image;
  logoText: string;
};

// Image object, supports multiple formats for responsive images
export type Image = {
  url: string;
  alternativeText: string | null;
  formats: {
    thumbnail: { url: string; alternativeText: string | null };
    small: { url: string; alternativeText: string | null };
    medium: { url: string; alternativeText: string | null };
    large: { url: string; alternativeText: string | null };
  };
};

// SEO metadata for pages
export type Seo = {
  metaTitle: string;
  metaDescription: string;
  metaImage: Image | null;
  metaKeywords?: string[];
  metaCanonicalUrl?: string;
};

// Banner section content
export type BannerContent = {
  title: string;
  description: string;
  eventDate: string;
  location: string;
  cta: Button;
  backgroundImage: Image;
};

// Event card content
export type EventContent = {
  documentId: string;
  title: string;
  subtitle: string;
  date: string;
  image: Image | null;
};

// Page content, including sections, events, SEO, and navigation flags
export type PageContent = {
  documentId: string;
  title: string;
  slug: string;
  textSections: TextSection[];
  events: EventContent[];
  seo: Seo;
  showInNavbar: boolean;
  showInFooter: boolean;
  parent: PageContent | null;
};

// Dropdown menu structure for navigation
export type DropdownLink = {
  name: string;
  links: Link[];
};

// Simple navigation link
export type Link = {
  name: string;
  url: string;
};

// Social media link with icon
export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin" | "tiktok" | "amazon";
  url: string;
  icon: string;
};

// Text section for pages, supports gradients, images, and optional CTA/events
export type TextSection = {
  title: string;
  description: string;
  textColor: CustomColors | "black" | "white";
  textLocation: "left" | "right";
  imageDirection: "left" | "right";
  image: Image;
  cta?: Button;
  events?: EventContent[];
  gradient?: Gradient;
  backgroundColor?: CustomColors | "white" | "black";
};

// Gradient definition for backgrounds
export type Gradient = {
  startColor: CustomColors;
  endColor: CustomColors;
  direction: "to top" | "to bottom" | "to left" | "to right";
};

// Custom color palette for consistent theming
export type CustomColors =
  | "primaryBrown"
  | "secondaryBrown"
  | "primaryNude"
  | "lightNude"
  | "lighterNude";

// Button definition for CTAs and forms
export type Button = {
  title: string;
  url?: string | null;
  backgroundColor: CustomColors | "white" | "black" | "transparent";
  textColor: CustomColors | "white" | "black";
  type?: "button" | "submit" | "link";
};
