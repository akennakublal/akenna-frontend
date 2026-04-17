import { useEffect } from "react";
import useSWR from "swr";
import type { BannerContent } from "../types/globals";
import qs from "qs";
import strapi from "../api/strapi";

const fetcher = async (url: string): Promise<BannerContent | null> => {
  const res = await strapi.get(url);
  return res.data?.data ?? null;
};

export const useBannerContent = () => {
  const query = qs.stringify(
    {
      populate: {
        backgroundImage: true,
        cta: true,
      },
    },
    { encodeValuesOnly: true }
  );

  const key = `/banner?${query}`;
  const localStorageKey = "banner-content";

  // Prefill from localStorage cache
  const fallbackData = (() => {
    try {
      const cached = localStorage.getItem(localStorageKey);
      return cached ? (JSON.parse(cached) as BannerContent) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  })();

  const { data, error, isLoading, mutate } = useSWR<BannerContent | null>(
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

  return { bannerData: data, loading: isLoading, error, mutate };
};
