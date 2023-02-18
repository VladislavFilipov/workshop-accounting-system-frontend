import { FC } from "react";
import { Link } from "react-router-dom";

import exitIcon from "@src/assets/exit-icon.png";
import qrScanIcon from "@src/assets/qr-scan-icon.png";
import useAuthStore from "@src/store/auth";

import styles from "./MenuPage.module.scss";

const MenuPage: FC = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className={styles.menu}>
      <div className={styles.title}>МЕНЮ</div>
      <div className={styles.subtitle}>
        Пожалуйста, выберете необходимую задачу
      </div>
      <div className={styles.list}>
        <Link
          to="/scanner"
          className={`${styles.linkButton} ${styles.default}`}
        >
          <img className={styles.img} src={qrScanIcon} alt="" />
          <div className={styles.text}>Учёт производимых работ</div>
        </Link>
      </div>

      <div className={styles.linkButton}>
        <img className={styles.img} src={exitIcon} alt="" />
        <div className={styles.text} onClick={logout}>
          Выход
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
