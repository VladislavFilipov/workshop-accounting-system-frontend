import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACKSTATION_KEY } from "@src/const/queryKeys";
import { IPackstation } from "@src/types/packstation";

const usePackstationById = (
  id: string | undefined,
): [IPackstation | undefined, any, boolean] => {
  const {
    data: packstation,
    error,
    isLoading,
  } = useQuery(
    [PACKSTATION_KEY, id],
    () => {
      if (!id) throw new Error("Неизвестная фасовочная станция.");
      return Api.packstations.getById(id);
    },
    {
      refetchInterval: 15000,
    },
  );
  return [packstation, error, isLoading];
};

export default usePackstationById;
