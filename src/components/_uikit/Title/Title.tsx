import { FC, HTMLAttributes, PropsWithChildren } from "react";

import cn from "classnames";

import styles from "./Title.module.scss";

type TTagVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Title: FC<
  PropsWithChildren<{ variant: TTagVariant; className?: string }> &
    HTMLAttributes<HTMLElement>
> = ({ variant, children, className, ...props }) => {
  const Heading = (variant || "h1") as TTagVariant;

  return (
    <Heading
      className={cn(styles.title, styles[`${variant}tag`], {
        [`${className}`]: !!className,
      })}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
