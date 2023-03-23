import { FC } from "react";

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
      title="Меню"
      isLargeTitle
      subtitle="Пожалуйста, выберите необходимую задачу"
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
          <MenuButton
            imgSrc={qrScanIcon}
            text="Учёт фасовки"
            pathTo="/accounting/packaging"
            isDefault
          />
          <br />
          {/* <MenuButton
            imgSrc={qrScanIcon}
            text="Активные работы"
            pathTo="/active-works"
            isDefault
          /> */}
          <MenuButton
            imgSrc={qrScanIcon}
            text="Станки"
            pathTo="/monitoring/machines"
            isDefault
          />
          <MenuButton
            imgSrc={qrScanIcon}
            text="Фасовочные станции"
            pathTo="/monitoring/packstations"
            isDefault
          />
          <br />
          <MenuButton
            imgSrc={qrScanIcon}
            text="Заявки"
            pathTo="/requests"
            isDefault
          />
        </div>
        <br />
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
