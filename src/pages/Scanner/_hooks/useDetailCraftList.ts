import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import { formatDetailCraftsList } from "@src/pages/Scanner/_functions/formatDetailCraftsList";
import useScannerData from "@src/store/scanner";
import { IDetailCraft } from "@src/types/detailCraft";

const useDetailCraftList = (detailCraft: IDetailCraft | undefined) => {
  const [canUpdate, setCanUpdate] = useScannerData((state) => [
    state.canUpdate,
    state.setCanUpdate,
  ]);
  const [canDetailFinish, setCanDetailFinish] = useScannerData((state) => [
    state.canDetailFinish,
    state.setCanDetailFinish,
  ]);

  const {
    data: detailCraftsList,
    error: listError,
    isLoading: listIsFetching,
    // refetch: getDetailCraftsList,
  } = useQuery(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    async () => {
      console.log("getDetailCraftsList detailCraft", detailCraft);
      const detailId: number | undefined = detailCraft?.details_id.id;
      if (!detailId) throw new Error("Error");

      const { sortedList, canUpdate, canDetailFinish } = formatDetailCraftsList(
        await Api.detailCraft.getByDetailId(detailId),
        detailCraft as IDetailCraft,
      );

      setCanUpdate(canUpdate);
      setCanDetailFinish(canDetailFinish);

      return sortedList;
    },
    {
      enabled: !!detailCraft,
    },
  );
  return { detailCraftsList, listError, listIsFetching };
};

export default useDetailCraftList;
