import { useEffect } from "react";
import useSWR from "swr";
import type { EventContent } from "../types/globals";
import qs from "qs";
import strapi from "../api/strapi";

const fetcher = async (url: string): Promise<EventContent[] | null> => {
  const res = await strapi.get(url);
  return res.data?.data ?? null;
};

export const useEventContent = () => {
  const query = qs.stringify(
    {
      populate: { image: true },
      sort: ["date:asc"],
    },
    { encodeValuesOnly: true }
  );

  const key = `/events?${query}`;
  const localStorageKey = "event-content";

  // Prefill from localStorage cache
  const fallbackData = (() => {
    try {
      const cached = localStorage.getItem(localStorageKey);
      return cached ? (JSON.parse(cached) as EventContent[]) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  })();

  const { data, error, isLoading, mutate } = useSWR<EventContent[] | null>(
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

  return { eventData: data, loading: isLoading, error, mutate };
};
