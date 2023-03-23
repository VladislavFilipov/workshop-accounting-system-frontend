import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACKSTATIONS_KEY } from "@src/const/queryKeys";
import { IWorkstation } from "@src/types/workstation";

const usePackstations = (): [IWorkstation[] | undefined, boolean, unknown] => {
  const {
    data: packstations,
    isLoading,
    error,
  } = useQuery([PACKSTATIONS_KEY], () => Api.packstations.getAll());
  return [packstations, isLoading, error];
};

export default usePackstations;
