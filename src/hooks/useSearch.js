import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../axios.js";

const useSearch = (url, debounceDelay = 300, options = {}) => {
  const [debouncedUrl, setDebouncedUrl] = useState(url);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedUrl(url), debounceDelay);
    return () => clearTimeout(handler);
  }, [url, debounceDelay]);

  const query = useQuery({
    queryKey: [debouncedUrl],
    queryFn: async () => {
      if (!debouncedUrl) return null;
      const { data } = await api.get(debouncedUrl);
      return data;
    },
    enabled: !!debouncedUrl,
    ...options,
  });

  return query;
};

export default useSearch;
