import { FC } from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

import exitIcon from "@src/assets/exit-icon.png";
import qrScanIcon from "@src/assets/qr-scan-icon.png";
import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import MenuButton from "@src/pages/Menu/MenuButton/MenuButton";
import useAuthStore from "@src/store/auth";

import styles from "./MenuPage.module.scss";

const MenuPage: FC = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <PageLayout
      title="МЕНЮ"
      subtitle="Пожалуйста, выберете необходимую задачу"
      className={styles.menu}
    >
      <>
        <div className={styles.list}>
          <MenuButton
            imgSrc={qrScanIcon}
            text="Учёт производимых работ"
            pathTo="/scanner"
            isDefault
          />
        </div>

        <MenuButton imgSrc={exitIcon} text="Выход" onClick={logout} />
      </>
    </PageLayout>
    // <div className={styles.menu}>
    //   <div className={styles.title}>МЕНЮ</div>
    //   <div className={styles.subtitle}>
    //     Пожалуйста, выберете необходимую задачу
    //   </div>

    // </div>
  );
};

export default MenuPage;
