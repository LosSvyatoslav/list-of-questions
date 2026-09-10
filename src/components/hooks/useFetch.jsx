import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Ошибка при запросе данных");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        if(!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }
    fetchData(url);
    return () => controller.abort();
  }, [url]);
  return {data, error, isLoading};
};
