import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_LIST_KEY } from "@src/const/queryKeys";
import { getSortedListWithCurrent } from "@src/pages/AccountingProduction/_functions/getSortedListWithCurrent";
import useScannerData from "@src/store/scanner";
import { IDetail } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

/**
 * Wrapper for React Query hook receiving list of crafting processes (detailCrafts) for the current detail
 */
const useDetailCraftList = (
  detail: IDetail,
): {
  detailCraftsList: IDetailCraft[] | undefined;
  listError: unknown;
  listIsFetching: boolean;
} => {
  const setCurDetailCraftId = useScannerData(
    (state) => state.setCurDetailCraftId,
  );

  const {
    data: detailCraftsList,
    error: listError,
    isLoading: listIsFetching,
  } = useQuery([DETAILS_CRAFT_LIST_KEY, detail], async () => {
    const detailId: number | undefined = detail.id;
    if (!detailId) throw new Error("Error");

    const { sortedList, curDetailCraftId } = getSortedListWithCurrent(
      await Api.detailCraft.getByDetailId(detailId),
    );

    setCurDetailCraftId(curDetailCraftId);

    return sortedList;
  });
  return { detailCraftsList, listError, listIsFetching };
};

export default useDetailCraftList;
