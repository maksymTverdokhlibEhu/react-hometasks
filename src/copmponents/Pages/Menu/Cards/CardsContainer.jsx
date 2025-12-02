import { useCallback, useEffect, useRef, useState } from "react";
import { Buttons } from "../Navigation/Navigation";
import { Card } from "./Card";
import s from "./CardsContainer.module.css";
import { mealsApi } from "../../../../lib/api/mealsApi";
import { Button } from "../../../ui/button/button";

export const CardsContainer = () => {
  const [tabs] = useState(["Dessert", "Dinner", "Breakfast"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [isEnd, setIsEnd] = useState(false);
  const isFirstRender = useRef(true);

  const fetchMeal = useCallback(() => {
    setLoading(true);
    mealsApi
      .getMany({ limit: limit, page: page, category: activeTab })
      .then((res) => {
        if (res.statusCode === 200) {
          setCards((prev) => [...prev, ...res.data]);
          setLoading(false);
          if (res.data.length < limit) {
            setIsEnd(true);
          }
        }
      });
  }, [activeTab, page, activeTab]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setPage((prev) => {
      if (prev === 1) {
        fetchMeal();
      }
      return 1;
    });
    setCards([]);
    setIsEnd(false);
  }, [activeTab]);

  useEffect(() => {
    fetchMeal();
  }, [page]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <div>
      <Buttons tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={s.grid}>
        {loading
          ? "Loading..."
          : cards.length == 0
          ? "No cards"
          : cards.map((card) => (
              <Card
                key={card.id}
                title={card.meal}
                price={card.price}
                description={card.instructions}
                image={card.img}
              />
            ))}
      </div>
      {isEnd ? null : (
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
          className={s.loadMorebtn}
          width="147px"
          height="52px"
        >
          See more
        </Button>
      )}
    </div>
  );
};
