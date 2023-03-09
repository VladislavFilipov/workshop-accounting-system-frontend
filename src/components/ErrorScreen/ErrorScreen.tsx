import { FC } from "react";

import { errors } from "@src/components/ErrorScreen/errorsData";
import Button from "@src/components/_uikit/Button/Button";
import LinkButton from "@src/components/_uikit/Button/LinkButton";
import Title from "@src/components/_uikit/Title";
import useAuthStore from "@src/store/auth";

import styles from "./ErrorScreen.module.scss";

interface IErrorScreenprops {
  type: "error" | "pageNotFound";
  cause?: string;
}

const ErrorScreen: FC<IErrorScreenprops> = ({ type, cause }) => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className={styles.screen}>
      <Title variant="h1" className={styles.text}>
        {errors[type].title}
      </Title>
      <Title variant="h3" className={styles.text}>
        {cause ?? errors[type].subtitle}
      </Title>
      <br />
      <LinkButton text="Меню" to="/" />
      {type === "error" && (
        <Button text="Сменить пользователя" onClick={() => logout()} />
      )}
    </div>
  );
};

export default ErrorScreen;
