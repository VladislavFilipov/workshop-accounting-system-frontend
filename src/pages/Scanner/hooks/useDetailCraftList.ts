import { useQuery } from "react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import { formatDetailCraftsList } from "@src/pages/Scanner/functions/formatDetailCraftsList";
import { IDetailCraft } from "@src/types/detailCraft";

const useDetailCraftList = (
  detailCraft: IDetailCraft | undefined,
  setCanUpdate: (_: boolean) => void,
  setCanDetailComplete: (_: boolean) => void,
) => {
  const {
    data: detailCraftsList,
    error: listError,
    // refetch: getDetailCraftsList,
  } = useQuery(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    async () => {
      console.log("getDetailCraftsList detailCraft", detailCraft);
      const detailId: number | undefined = detailCraft?.details_id.id;
      if (!detailId) throw new Error("Error");

      const { sortedList, canUpdate, canDetailComplete } =
        formatDetailCraftsList(
          await Api.detailsCraftApi.getByDetailId(detailId),
          detailCraft as IDetailCraft,
        );

      setCanUpdate(canUpdate);
      setCanDetailComplete(canDetailComplete);

      return sortedList;
    },
    {
      enabled: !!detailCraft,
    },
  );
  return { detailCraftsList, listError };
};

export default useDetailCraftList;
