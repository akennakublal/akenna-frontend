import { useEffect } from "react";
import useSWR from "swr";
import type { GlobalContent } from "../types/globals";
import qs from "qs";
import strapi from "../api/strapi";

const fetcher = async (url: string): Promise<GlobalContent | null> => {
  const res = await strapi.get(url);
  return res.data?.data ?? null;
};

export const useGlobalContent = () => {
  const query = qs.stringify(
    {
      populate: {
        logo: { populate: { logoImage: true } },
        socialLinks: true,
        seoDefaults: { populate: { metaImage: true } },
      },
    },
    { encodeValuesOnly: true }
  );

  const key = `/global?${query}`;
  const localStorageKey = "global-content";

  // Prefill from localStorage cache
  const fallbackData = (() => {
    try {
      const cached = localStorage.getItem(localStorageKey);
      return cached ? (JSON.parse(cached) as GlobalContent) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  })();

  const { data, error, isLoading, mutate } = useSWR<GlobalContent | null>(
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

  return { globalData: data, loading: isLoading, error, mutate };
};
