import { Outlet } from "react-router-dom";

import Header from "@src/components/Header";
import useAuthStore from "@src/store/auth";

import style from "./AppLayout.module.scss";

const AppLayout = () => {
  const auth = useAuthStore();
  console.log("auth", auth);

  return (
    <div className={style.appLayout}>
      <Header />
      <Outlet />
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default AppLayout;
