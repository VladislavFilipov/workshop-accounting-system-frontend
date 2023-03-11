import { FC, PropsWithChildren } from "react";

import Spinner from "@src/components/_uikit/Spinner/Spinner";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";

interface IDataContainerProps {
  isLoading: boolean;
  error: any;
}

const DataContainer: FC<PropsWithChildren<IDataContainerProps>> = ({
  isLoading,
  error,
  children,
}) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <StatusLabel text={(error as Error).message} type="error" />
      ) : (
        children
      )}
    </div>
  );
};

export default DataContainer;
