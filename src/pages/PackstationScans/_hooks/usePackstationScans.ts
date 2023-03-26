import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { PACKSTATION_SCANS_KEY } from "@src/const/queryKeys";
import { IPackstationScan } from "@src/types/packstation";

const usePackstationScans = (
  id: string | undefined,
): [IPackstationScan[] | undefined, any, boolean] => {
  const {
    data: scans,
    error,
    isLoading,
  } = useQuery(
    [PACKSTATION_SCANS_KEY, id],
    () => {
      if (!id) throw new Error("Неизвестная фасовочная станция.");
      return Api.packstations.getScansByPackstation(id);
    },
    {
      refetchInterval: 5000,
    },
  );
  return [scans, error, isLoading];
};

export default usePackstationScans;
