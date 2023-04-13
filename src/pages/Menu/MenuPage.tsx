import { FC } from "react";

import BoxSVG from "@src/assets/icons/menu/box.svg";
import ExitSVG from "@src/assets/icons/menu/exit.svg";
import MonitorSVG from "@src/assets/icons/menu/monitor.svg";
import QRcodeSVG from "@src/assets/icons/menu/qrcode.svg";
import ToolsSVG from "@src/assets/icons/menu/tools.svg";
import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import Title from "@src/components/_uikit/Title/Title";
import { ADMIN, MODERATOR } from "@src/const/userRoles";
import useCheckAccess from "@src/hooks/useCheckAccess";
import MenuButton from "@src/pages/Menu/MenuButton/MenuButton";
import useAuthStore from "@src/store/auth";

import styles from "./MenuPage.module.scss";

const MenuPage: FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const hasModeratorAccess = useCheckAccess([MODERATOR, ADMIN]);
  return (
    <PageLayout
      title="Меню"
      isLargeTitle
      subtitle="Пожалуйста, выберите необходимую задачу"
      className={styles.menu}
    >
      <>
        <div className={styles.list}>
          <Title variant="h5" className={styles.blockTitle}>
            <QRcodeSVG className={styles.qrcodeSvg} /> Учет
          </Title>
          <MenuButton
            img={<ToolsSVG className={styles.toolsSvg} />}
            text="Работы"
            pathTo="/accounting/production"
            isDefault
          />
          <MenuButton
            img={<BoxSVG className={styles.boxSvg} />}
            text="Фасовка"
            pathTo="/accounting/packaging"
            isDefault
          />
          {/* <MenuButton
            img={<QRcodeSVG/>}
            text="Активные работы"
            pathTo="/active-works"
            isDefault
          /> */}
          {hasModeratorAccess && (
            <>
              <Title variant="h5" className={styles.blockTitle}>
                <MonitorSVG className={styles.monitorSvg} /> Мониторинг
              </Title>
              <MenuButton
                img={<QRcodeSVG />}
                text="Станки"
                pathTo="/monitoring/machines"
                isDefault
              />
              <MenuButton
                img={<QRcodeSVG />}
                text="Фасовочные станции"
                pathTo="/monitoring/packstations"
                isDefault
              />
              <MenuButton
                img={<QRcodeSVG />}
                text="Заявки"
                pathTo="/requests"
                isDefault
              />
            </>
          )}
        </div>
        <br />
        <br />
        <MenuButton img={<ExitSVG />} text="Выход" onClick={logout} />
      </>
    </PageLayout>
  );
};

export default MenuPage;
