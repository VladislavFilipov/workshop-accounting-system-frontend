import { FC, HTMLAttributes, PropsWithChildren } from "react";

import cn from "classnames";

import styles from "./Text.module.scss";

type TSize = "xs" | "s" | "m" | "l" | "xl";
type TWeight = 400 | 500 | 600;

interface ITextProps {
  size?: TSize;
  className?: string;
}

const Text: FC<PropsWithChildren<ITextProps> & HTMLAttributes<HTMLElement>> = ({
  size = "m",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.text, styles[`${size}`], {
        [`${className}`]: !!className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Text;
