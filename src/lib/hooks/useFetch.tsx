import { useLocalStorage } from "./useLocalStorage";

export const useFetch = () => {
  const { setItem, getItem } = useLocalStorage();

  const logFetch = async (
    url: string,
    options: RequestInit,
    cache: boolean,
  ) => {
    try {
      if (cache) {
        const item = getItem(url);

        if (item) {
          return item;
        }
      }

      const res = await fetch(url, {
        ...options,
      });

      const data = await res.json();
      setItem(url, {
        payload: options?.body ? JSON.stringify(options?.body) : null,
        status: res.status,
        response: data,
      });
      return data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };

  return logFetch;
};
