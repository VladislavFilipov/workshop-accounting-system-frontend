import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_LIST_KEY } from "@src/const/queryKeys";
import { formatDetailCraftsList } from "@src/pages/AccountingProduction/_functions/formatDetailCraftsList";
import useScannerData from "@src/store/scanner";
import { IDetail } from "@src/types/detail";

const useDetailCraftList = (detail: IDetail) => {
  const setCurDetailCraftId = useScannerData(
    (state) => state.setCurDetailCraftId,
  );
  const setCanDetailFinish = useScannerData(
    (state) => state.setCanDetailFinish,
  );

  const {
    data: detailCraftsList,
    error: listError,
    isLoading: listIsFetching,
  } = useQuery([DETAILS_CRAFT_LIST_KEY, detail], async () => {
    console.log("getDetailCraftsList detail", detail);
    const detailId: number | undefined = detail.id;
    if (!detailId) throw new Error("Error");

    const { sortedList, curDetailCraftId } = formatDetailCraftsList(
      await Api.detailCraft.getByDetailId(detailId),
      // detailCraft as IDetailCraft,
    );

    setCurDetailCraftId(curDetailCraftId);
    setCanDetailFinish(true);

    return sortedList;
  });
  return { detailCraftsList, listError, listIsFetching };
};

export default useDetailCraftList;
