import { CardsContainer } from "./Cards/CardsContainer";
import { Heading } from "./Heading/Heading";
import s from "./index.module.css";

export const MenuPage = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <Heading />
        <CardsContainer />
      </div>
    </div>
  );
};
