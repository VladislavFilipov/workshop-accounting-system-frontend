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
    isFetching,
    refetch: getDetailCraft,
  } = useQuery([DETAILS_CRAFT_KEY], () => {
    try {
      return Api.detailCraft.getByToken(scannedToken);
    } catch (error) {
      throw new Error("Данные некорректны.");
    }
  });

  return {
    detailCraft,
    getDetailCraft,
    error,
    isFetching,
  };
};

export default useDetailCraft;
