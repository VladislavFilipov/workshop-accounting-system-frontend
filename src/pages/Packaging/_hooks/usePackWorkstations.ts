import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACK_WORKSTATIONS_KEY } from "@src/const/queryKeys";
import { IWorkstation } from "@src/types/workstation";

const usePackWorkstations = (): [
  IWorkstation[] | undefined,
  boolean,
  unknown,
] => {
  const {
    data: workstations,
    isLoading,
    error,
  } = useQuery([PACK_WORKSTATIONS_KEY], () => Api.packaging.getAll());
  return [workstations, isLoading, error];
};

export default usePackWorkstations;
