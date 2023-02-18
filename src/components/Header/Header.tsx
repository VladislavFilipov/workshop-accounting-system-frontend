// import Clock from "@src/components/Header/Clock";
import UserInfo from "@src/components/Header/UserInfo";
import useAuthStore from "@src/store/auth";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        {/* {isAuthorized && <button onClick={logout}>Сменить пользователя</button>} */}
      </div>

      <UserInfo />
    </div>
  );
};

export default Header;
