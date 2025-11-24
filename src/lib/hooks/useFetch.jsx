import { useLocalStorage } from "./useLocalStorage";

export const useFetch = () => {
  const { setItem, getItem } = useLocalStorage();

  const logFetch = async (url, options, cache) => {
    try {
      if (cache) {
        const item = getItem(url);
        console.log(item, "cashed");
        if (item) {
          return item;
        }
      }

      const res = await fetch(url, {
        ...options,
      });

      const data = await res.json();
      console.log(data);
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
