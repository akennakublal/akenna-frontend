import { useEffect } from "react";
import useSWR from "swr";
import type { PageContent } from "../types/globals";
import qs from "qs";
import strapi from "../api/strapi";

const fetcher = async (url: string): Promise<PageContent | null> => {
  const res = await strapi.get(url);
  return res.data?.data?.[0] ?? null;
};

export const usePageContent = (slug: string) => {
  // Build query string for Strapi API
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        textSections: {
          populate: {
            image: true,
            cta: true,
            gradient: true,
          },
        },
        seo: {
          populate: {
            metaImage: true,
          },
        },
        events: {
          populate: {
            image: true,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const key = `/pages?${query}`;

  // Prefill from localStorage cache
  const localStorageKey = `page:${slug}`;

  const fallbackData = (() => {
    try {
      const cached = localStorage.getItem(localStorageKey);
      return cached ? (JSON.parse(cached) as PageContent) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  })();

  const { data, error, isLoading, mutate } = useSWR<PageContent | null>(
    key,
    fetcher,
    {
      fallbackData,
      revalidateOnMount: true,
    }
  );

  // Persist to localStorage only when data changes
  useEffect(() => {
    if (data) {
      localStorage.setItem(localStorageKey, JSON.stringify(data));
    }
  }, [data, localStorageKey]);

  // Return state for use in components
  return { pageData: data, loading: isLoading, error, mutate };
};
