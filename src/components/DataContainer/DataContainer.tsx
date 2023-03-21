import { FC, PropsWithChildren, ReactNode } from "react";

import cn from "classnames";

import Spinner from "@src/components/_uikit/Spinner/Spinner";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";

import styles from "./DataContainer.module.scss";

interface IDataContainerProps {
  isLoading: boolean;
  error: unknown;
  skeleton?: ReactNode;
  className?: string;
}

const DataContainer: FC<PropsWithChildren<IDataContainerProps>> = ({
  isLoading,
  error,
  skeleton,
  children,
  className,
}) => {
  return (
    <div className={cn(styles.container, { [`${className}`]: !!className })}>
      {isLoading ? (
        skeleton ?? <Spinner />
      ) : error ? (
        <StatusLabel text={(error as Error).message} type="error" />
      ) : (
        children
      )}
    </div>
  );
};

export default DataContainer;
