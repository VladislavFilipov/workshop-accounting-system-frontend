import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "@src/components/Header";

import style from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={style.appLayout}>
      <Header />
      <div className={style.content}>
        <Suspense fallback={<>SUSPENSE</>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AppLayout;
