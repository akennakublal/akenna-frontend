import { useEffect } from "react";
import { IMAGE_API_URL } from "../api/strapi";
import type { Seo } from "../types/globals";

export default function SEO({
  metaTitle,
  metaDescription,
  metaImage,
  metaKeywords,
  metaCanonicalUrl,
}: Seo) {
  useEffect(() => {
    if (metaTitle) document.title = metaTitle;

    const tags: HTMLMetaElement[] = [];

    function setMeta(name: string, content: string, property = false) {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
        tags.push(tag);
      }
      tag.setAttribute("content", content);
    }

    if (metaDescription) setMeta("description", metaDescription);
    if (metaKeywords && metaKeywords.length > 0)
      setMeta("keywords", metaKeywords.join(", "));
    if (metaCanonicalUrl) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", metaCanonicalUrl);
    }
    if (metaImage) {
      const metaImageUrl = IMAGE_API_URL + metaImage.url;
      setMeta("og:image", metaImageUrl, true);
      setMeta("og:type", "website", true);
      if (metaTitle) setMeta("og:title", metaTitle, true);
      if (metaDescription) setMeta("og:description", metaDescription, true);
      setMeta("twitter:card", "summary_large_image");
      if (metaTitle) setMeta("twitter:title", metaTitle);
      if (metaDescription) setMeta("twitter:description", metaDescription);
      setMeta("twitter:image", metaImageUrl);
    }

    // Cleanup: remove tags we added
    return () => {
      tags.forEach((tag) => document.head.removeChild(tag));
    };
  }, [metaTitle, metaDescription, metaImage, metaKeywords, metaCanonicalUrl]);

  return null;
}
