import React from "react";
import { Input } from "../../ui/input/input";
import { useInput } from "../../../lib/hooks/useInput";
import { Button } from "../../ui/button/button";
import s from "./index.module.css";
import { completeOrder } from "../../../lib/state/reducers/cart.reducer";
import { useDispatch } from "react-redux";

export const Form = () => {
  const [street, setStreet] = useInput("");
  const [house, setHouse] = useInput("");
  const dispatch = useDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(completeOrder({ house, street }));
    setHouse("");
    setStreet("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.inputs}>
        <Input
          label="Street"
          name="name"
          value={street}
          handleChange={setStreet}
          placeholder=""
          size="xl"
        />
        <Input
          label="House"
          name="house"
          value={house}
          handleChange={setHouse}
          placeholder=""
          size="xl"
        />
      </div>
      <div className={s.buttons}>
        <Button
          style={{ marginInline: "auto", marginTop: "35px" }}
          type="submit"
          className="button"
          width="147px"
          height="52px"
        >
          Order
        </Button>
      </div>
    </form>
  );
};
