import { useEffect } from "react";
import { useFetch } from "../../../lib/hooks/useFetch";
import { FirstSection } from "./FirstSection/FirstSection";

export const HomePage = () => {
  const logFetch = useFetch();

  useEffect(() => {
    logFetch("https://jsonplaceholder.typicode.com/todos/1", {}, true);
  }, []);

  return (
    <div className="">
      <FirstSection />
    </div>
  );
};
