import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PROD_WORKSTATIONS_KEY } from "@src/const/queryKeys";
import { IWorkstation } from "@src/types/workstation";

const useProdWorkstations = (): [
  IWorkstation[] | undefined,
  boolean,
  unknown,
] => {
  const {
    data: workstations,
    isLoading,
    error,
  } = useQuery([PROD_WORKSTATIONS_KEY], () => Api.packaging.getAll());
  return [workstations, isLoading, error];
};

export default useProdWorkstations;
