import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { MACHINES_KEY } from "@src/const/queryKeys";
import { IWorkstation } from "@src/types/workstation";

const useMachines = (): [IWorkstation[] | undefined, boolean, unknown] => {
  const {
    data: machines,
    isLoading,
    error,
  } = useQuery([MACHINES_KEY], () => Api.machines.getAll());
  return [machines, isLoading, error];
};

export default useMachines;
