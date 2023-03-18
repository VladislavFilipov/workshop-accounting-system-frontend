import { FC, HTMLAttributes, PropsWithChildren } from "react";

import cn from "classnames";

import styles from "./Text.module.scss";

type TSize = "xs" | "s" | "m" | "l" | "xl";

interface ITextProps {
  size?: TSize;
  className?: string;
  inline?: boolean;
}

const Text: FC<PropsWithChildren<ITextProps> & HTMLAttributes<HTMLElement>> = ({
  size = "m",
  children,
  className,
  inline,
  ...props
}) => {
  const Tag = inline ? "span" : "div";
  return (
    <Tag
      className={cn(styles.text, styles[`${size}`], {
        [`${className}`]: !!className,
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
