import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";

import UserInfo from "@src/components/Header/UserInfo";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";

import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.header}>
      {location.pathname !== "/" && location.pathname !== "/login" ? (
        <Link to="/">
          <Button text="Меню" />
        </Link>
      ) : (
        <div></div>
      )}
      <ErrorBoundary
        FallbackComponent={() => <StatusLabel text="Ошибка" type="error" />}
      >
        <UserInfo />
      </ErrorBoundary>
    </div>
  );
};

export default Header;
