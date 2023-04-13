import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAIL_KEY, STAMP_KEY } from "@src/const/queryKeys";
import useScannerData from "@src/store/scanner";

const useDetail = () => {
  const scannedEid = useScannerData((state) => state.scannedEid);
  const scannedStampEid = useScannerData((state) => state.scannedStampEid);

  const {
    data: detail,
    error: errorDetail,
    isLoading: isLoadingDetail,
  } = useQuery([DETAIL_KEY, scannedEid], () => {
    if (!scannedEid) throw new Error("Некорректный ID детали.");
    return Api.details.getByEnterpriceId(scannedEid);
  });

  const {
    data: stamp,
    error: errorStamp,
    isLoading: isLoadingStamp,
  } = useQuery(
    [STAMP_KEY, scannedStampEid],
    () => {
      if (!scannedEid) throw new Error("Некорректный ID штампа.");
      return Api.stamps.getByEnterpriceId(scannedStampEid);
    },
    {
      enabled: !!detail,
    },
  );

  return {
    detail,
    errorDetail,
    isLoadingDetail,
    stamp,
    errorStamp,
    isLoadingStamp,
  };
};

export default useDetail;
