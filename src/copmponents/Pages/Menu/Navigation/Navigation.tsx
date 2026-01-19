import React from "react";
import s from "./Navigation.module.css";
import { Button } from "../../../ui/button/button";

export interface ButtonsProps {
  tabs: string[];
  activeTab: string | undefined;
  setActiveTab: (tab: string) => void;
}

export const Buttons: React.FC<ButtonsProps> = React.memo(
  ({ tabs, activeTab, setActiveTab }) => {
    return (
      <div className={s.buttons}>
        {tabs.map((tab) => (
          <Button
            width="auto"
            onClick={() => {
              setActiveTab(tab);
            }}
            height="52px"
            key={tab}
            className={s.button}
            variant={activeTab === tab ? "primary" : "secondary"}
          >
            {tab}
          </Button>
        ))}
      </div>
    );
  },
);

Buttons.displayName = "Buttons";
