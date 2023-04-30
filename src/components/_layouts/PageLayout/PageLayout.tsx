/*
  Layout provides base structure for page, includes title
*/
import { FC, PropsWithChildren, useEffect } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import usePageStore from "@src/store/page";

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
  const setTitle = usePageStore((s) => s.setTitle);

  useEffect(() => setTitle(title), []);

  return (
    <div className={cn(styles.page, { [`${className}`]: !!className })}>
      <Title
        variant="h1"
        className={cn(styles.title, { [styles.titleSmall]: !isLargeTitle })}
        data-testid={title}
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
