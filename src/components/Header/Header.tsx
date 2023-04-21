import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";

import cn from "classnames";

import UserInfo from "@src/components/Header/UserInfo";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title/Title";
import usePageStore from "@src/store/page";

import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const title = usePageStore((s) => s.title);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 100) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {location.pathname !== "/" && location.pathname !== "/login" ? (
          <Link to="/">
            <Button text="Меню" />
          </Link>
        ) : (
          <div></div>
        )}
        <Title
          variant="h5"
          className={cn(styles.title, { [styles["showTitle"]]: show })}
        >
          {title}
        </Title>
      </div>
      <ErrorBoundary
        FallbackComponent={() => <StatusLabel text="Ошибка" type="error" />}
      >
        <UserInfo />
      </ErrorBoundary>
    </div>
  );
};

export default Header;
