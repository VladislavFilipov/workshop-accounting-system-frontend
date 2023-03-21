import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACK_WORKPLACES_KEY } from "@src/const/queryKeys";
import { IWorkplace } from "@src/types/workplace";

const usePackWorkplaces = (): [IWorkplace[] | undefined, boolean, unknown] => {
  const {
    data: workplaces,
    isLoading,
    error,
  } = useQuery([PACK_WORKPLACES_KEY], () => Api.packaging.getAll());
  return [workplaces, isLoading, error];
};

export default usePackWorkplaces;
