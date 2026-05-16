import { useEffect } from "react";
import { IMAGE_API_URL } from "../api/strapi";
import type { Seo } from "../types/globals";

const SITE_URL = "https://akennacyrus.com";
const SITE_NAME = "Akenna Cyrus";

function getAbsoluteImageUrl(url?: string | null): string | null {
  if (!url) return null;

  return url.startsWith("http") ? url : `${IMAGE_API_URL}${url}`;
}

function normalizeKeywords(metaKeywords: unknown): string {
  if (!metaKeywords) return "";

  if (Array.isArray(metaKeywords)) {
    return metaKeywords
      .filter((keyword): keyword is string => typeof keyword === "string")
      .join(", ");
  }

  if (typeof metaKeywords === "string") {
    return metaKeywords;
  }

  return "";
}

export default function SEO({
  metaTitle,
  metaDescription,
  metaImage,
  metaKeywords,
  metaCanonicalUrl,
}: Seo) {
  useEffect(() => {
    if (metaTitle) {
      document.title = metaTitle;
    }

    const tagsAddedByThisComponent: HTMLElement[] = [];

    function setMeta(name: string, content: string, property = false) {
      if (!content) return;

      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");

        if (property) {
          tag.setAttribute("property", name);
        } else {
          tag.setAttribute("name", name);
        }

        document.head.appendChild(tag);
        tagsAddedByThisComponent.push(tag);
      }

      tag.setAttribute("content", content);
    }

    function setCanonical(url: string) {
      let link = document.head.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
        tagsAddedByThisComponent.push(link);
      }

      link.setAttribute("href", url);
    }

    function setJsonLd(id: string, data: Record<string, unknown>) {
      let script = document.getElementById(id) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
        tagsAddedByThisComponent.push(script);
      }

      script.textContent = JSON.stringify(data);
    }

    const keywords = normalizeKeywords(metaKeywords);
    const canonicalUrl = metaCanonicalUrl || SITE_URL;
    const metaImageUrl = getAbsoluteImageUrl(metaImage?.url);

    // Basic SEO
    if (metaDescription) {
      setMeta("description", metaDescription);
    }

    if (keywords) {
      setMeta("keywords", keywords);
    }

    setCanonical(canonicalUrl);

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:url", canonicalUrl, true);

    if (metaTitle) {
      setMeta("og:title", metaTitle, true);
    }

    if (metaDescription) {
      setMeta("og:description", metaDescription, true);
    }

    if (metaImageUrl) {
      setMeta("og:image", metaImageUrl, true);
    }

    // Twitter / X
    setMeta("twitter:card", metaImageUrl ? "summary_large_image" : "summary");

    if (metaTitle) {
      setMeta("twitter:title", metaTitle);
    }

    if (metaDescription) {
      setMeta("twitter:description", metaDescription);
    }

    if (metaImageUrl) {
      setMeta("twitter:image", metaImageUrl);
    }

    // Structured data: Website
    setJsonLd("website-structured-data", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Akenna Cyrus",
      alternateName: ["Akenna Kublal"],
      url: SITE_URL,
    });

    // Structured data: Person
    setJsonLd("person-structured-data", {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Akenna Cyrus",
      alternateName: "Akenna Kublal",
      url: SITE_URL,
      image: metaImageUrl || undefined,
      jobTitle: [
        "Life Coach",
        "Speaker",
        "Author",
        "Personal Development Consultant",
      ],
      description:
        "Akenna Cyrus, formerly known as Akenna Kublal, is a life coach, speaker, author, and personal development consultant.",
      sameAs: [
        "https://www.tiktok.com/@akpersonaldevelopment",
        "https://www.amazon.com/stores/Akenna-C.-Kublal/author/B0C1DH2YHH",
        "https://www.facebook.com/akpersonaldevelopment/",
        "https://www.instagram.com/akennakublal/",
        "https://www.linkedin.com/in/akenna-c-kublal-4658651b5/",


      ],
    });

    return () => {
      tagsAddedByThisComponent.forEach((element) => {
        if (document.head.contains(element)) {
          document.head.removeChild(element);
        }
      });
    };
  }, [metaTitle, metaDescription, metaImage, metaKeywords, metaCanonicalUrl]);

  return null;
}