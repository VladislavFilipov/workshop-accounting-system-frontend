import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACKSTATIONS_KEY } from "@src/const/queryKeys";
import { IPackstation } from "@src/types/packstation";

const usePackstations = (): [IPackstation[] | undefined, boolean, unknown] => {
  const {
    data: packstations,
    isLoading,
    error,
  } = useQuery([PACKSTATIONS_KEY], () => Api.packstations.getAll(), {
    refetchInterval: 2000,
  });
  return [packstations, isLoading, error];
};

export default usePackstations;
