import { useEffect } from "react";
import useSWR from "swr";
import type { PageContent } from "../types/globals";
import qs from "qs";
import strapi from "../api/strapi";

const fetcher = async (url: string): Promise<PageContent[] | null> => {
  const res = await strapi.get(url);
  return res.data?.data ?? null;
};

export const useNavbarContent = () => {
  const query = qs.stringify(
    {
      populate: { parent: true, children: true },
      sort: ["title:asc"],
    },
    { encodeValuesOnly: true }
  );

  const key = `/pages?${query}`;
  const localStorageKey = "navbar-content";

  // Prefill from localStorage cache
  const fallbackData = (() => {
    try {
      const cached = localStorage.getItem(localStorageKey);
      return cached ? (JSON.parse(cached) as PageContent[]) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  })();

  const { data, error, isLoading, mutate } = useSWR<PageContent[] | null>(
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

  return {
    navbarData: data?.filter((page) => page.showInNavbar),
    loading: isLoading,
    error,
    mutate,
  };
};
