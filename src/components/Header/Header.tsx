import { ErrorBoundary } from "react-error-boundary";

import UserInfo from "@src/components/Header/UserInfo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>{/* clock will be here */}</div>

      <ErrorBoundary FallbackComponent={() => <>Error</>}>
        <UserInfo />
      </ErrorBoundary>
    </div>
  );
};

export default Header;
