/*
  detail craft is a stage of detail production
*/
import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import useScannerData from "@src/store/scanner";

const useDetailCraft = () => {
  const scannedEid = useScannerData((state) => state.scannedEid);

  const {
    data: detailCraft,
    error,
    isLoading,
    refetch: getDetailCraft,
  } = useQuery([DETAILS_CRAFT_KEY, scannedEid], () => {
    if (!scannedEid) throw new Error("Некорректный токен.");
    return Api.detailCraft.getById(scannedEid);
  });

  return {
    detailCraft,
    getDetailCraft,
    error,
    isLoading,
  };
};

export default useDetailCraft;
