/*
  Layout provides base structure for page, includes title
*/
import { FC, PropsWithChildren } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";

import styles from "./PageLayout.module.scss";

interface IPageLayoutProps {
  title: string;
  isLargeTitle?: boolean;
  subtitle: string;
  className?: string;
}

const PageLayout: FC<PropsWithChildren<IPageLayoutProps>> = ({
  title,
  isLargeTitle,
  subtitle,
  children,
  className,
}) => {
  return (
    <div className={cn(styles.menu, { [`${className}`]: !!className })}>
      <Title
        variant="h1"
        className={cn(styles.title, { [styles.titleSmall]: !isLargeTitle })}
      >
        {title}
      </Title>
      <Text size="xl" inline className={styles.subtitle}>
        {subtitle}
      </Text>
      {children}
    </div>
  );
};

export default PageLayout;
