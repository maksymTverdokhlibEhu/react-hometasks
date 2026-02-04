import React, { useState } from "react";
import { Input } from "../../ui/input/input";
import { useInput } from "../../../lib/hooks/useInput";
import { Button } from "../../ui/button/button";
import s from "./index.module.css";
import { useLocalStorage } from "../../../lib/hooks/useLocalStorage";
import { userService } from "../../../lib/services/userService";
import type { DocumentData, DocumentReference } from "firebase/firestore";

export const Form = () => {
  const { setItem: setAuthId } = useLocalStorage("authId");
  const [name, setName] = useInput("");
  const [password, setPassword] = useInput("");
  const [error, setError] = useState(false);

  const reset = () => {
    setName("");
    setPassword("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 2 || password.length == 0 || error) {
      return setError(true);
    }

    const res = await userService.addUser<
      DocumentReference<DocumentData, DocumentData>
    >(name, password);
    console.log(res?.id);
    

    if (res?.id) {
      setAuthId(undefined, res.id);
    }
  };

  function inputHandler(fn: any) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(false);
      fn(e.target.value);
    };
  }

  return (
    <form
      style={{
        border: error ? "3px solid red" : "none",
      }}
      className={s.form}
      onSubmit={onSubmit}
    >
      <div className={s.inputs}>
        <Input
          label="User name"
          name="name"
          value={name}
          handleChange={inputHandler(setName)}
          placeholder="Name"
          size="xl"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={password}
          handleChange={inputHandler(setPassword)}
          placeholder="Password"
          size="xl"
        />
      </div>
      <div className={s.buttons}>
        <Button type="submit" className="button" width="147px" height="52px">
          Submit
        </Button>
        <Button
          onClick={() => reset()}
          variant="secondary"
          className="button"
          width="147px"
          height="52px"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
