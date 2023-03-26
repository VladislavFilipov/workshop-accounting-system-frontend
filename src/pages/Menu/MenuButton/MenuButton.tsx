import { FC } from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

import styles from "./MenuButton.module.scss";

interface IMenuButtonProps {
  imgSrc: string;
  text: string;
  pathTo?: string;
  isDefault?: boolean;
  onClick?: () => void;
}

const MenuButton: FC<IMenuButtonProps> = ({
  text,
  imgSrc,
  pathTo,
  isDefault,
  onClick,
}) => {
  const body = (
    <>
      <img className={styles.img} src={imgSrc} alt="" />
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
