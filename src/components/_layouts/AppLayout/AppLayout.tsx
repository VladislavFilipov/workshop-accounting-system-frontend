import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import BgLogoSVG from "@src/assets/bg-logo.svg";
import Header from "@src/components/Header";
import Spinner from "@src/components/_uikit/Spinner/Spinner";

import styles from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={styles.content}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <BgLogoSVG className={styles.bgLogo} />
    </div>
  );
};

export default AppLayout;
