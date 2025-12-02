import { useEffect } from "react";
import { FirstSection } from "./FirstSection/FirstSection";
import { useFetch } from "../../../lib/hooks/useFetch";

export const HomePage = () => {
  const logFetch = useFetch();

  useEffect(() => {
    logFetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      null,
      true
    );
  }, []);

  return (
    <div className="">
      <FirstSection />
    </div>
  );
};
