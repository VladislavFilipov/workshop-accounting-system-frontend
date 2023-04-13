import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

import styles from "./MenuButton.module.scss";

interface IMenuButtonProps {
  img: ReactNode;
  text: string;
  pathTo?: string;
  isDefault?: boolean;
  onClick?: () => void;
}

const MenuButton: FC<IMenuButtonProps> = ({
  text,
  img,
  pathTo,
  isDefault,
  onClick,
}) => {
  const body = (
    <>
      <div className={styles.img}>{img}</div>
      <div className={styles.text}>{text}</div>
    </>
  );

  const className = cn(styles.menuButton, { [styles.default]: isDefault });

  return pathTo ? (
    <Link className={className} to={pathTo}>
      {body}
    </Link>
  ) : (
    <div className={className} onClick={onClick}>
      {body}
    </div>
  );
};

export default MenuButton;
