import classNames from "classnames";
import { Form } from "./Form";
import s from "./index.module.css";

export const LoginPage = () => {
  return (
    <div className={s["loginPage"]}>
      <div className={classNames("container")}>
        <h1>Log in</h1> 
        <Form />
      </div>
    </div>
  );
};
