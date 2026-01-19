import React from "react";
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

  const reset = () => {
    setName("");
    setPassword("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userService.addUser<
      DocumentReference<DocumentData, DocumentData>
    >(name, password);

    if (res?.id) {
      setAuthId(undefined, res.id);
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.inputs}>
        <Input
          label="User name"
          name="name"
          value={name}
          handleChange={setName}
          placeholder="Name"
          size="xl"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={password}
          handleChange={setPassword}
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
