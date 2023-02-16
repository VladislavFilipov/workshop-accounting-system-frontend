// import Clock from "@src/components/Header/Clock";
import UserInfo from "@src/components/Header/UserInfo";
import useAuthStore from "@src/store/auth";

import styles from "./Header.module.scss";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  return (
    <div className={styles.header}>
      {isAuthorized && <button onClick={logout}>Сменить пользователя</button>}
      <UserInfo />
    </div>
  );
};

export default Header;
