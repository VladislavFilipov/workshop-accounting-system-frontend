import { FC, PropsWithChildren } from "react";

import cn from "classnames";

import styles from "./PageLayout.module.scss";

interface IPageLayoutProps {
  title: string;
  subtitle: string;
  className?: string;
}

const PageLayout: FC<PropsWithChildren<IPageLayoutProps>> = ({
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <div className={cn(styles.menu, { [`${className}`]: !!className })}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      {children}
    </div>
  );
};

export default PageLayout;
