import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import useScannerData from "@src/store/scanner";

const useDetailCraft = () => {
  // const typeOfScanning = useScannerData((state) => state.typeOfScanning);
  const scannedToken = useScannerData((state) => state.scannedToken);

  const {
    data: detailCraft,
    error,
    isLoading,
    refetch: getDetailCraft,
  } = useQuery([DETAILS_CRAFT_KEY], () => {
    if (!scannedToken) throw new Error("Некорректный токен.");
    return Api.detailCraft.getByToken(scannedToken);
  });

  return {
    detailCraft,
    getDetailCraft,
    error,
    isLoading,
  };
};

export default useDetailCraft;
