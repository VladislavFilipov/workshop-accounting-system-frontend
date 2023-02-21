import { useMutation } from "react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_LIST_KEY } from "@src/const/queryKeys";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import { IDetail, TDetailStatus } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

const useUpdateDetailCraft = (
  detailCraft: IDetailCraft | undefined,
  updateDetailStatus: (options: {
    detailCraft: IDetailCraft;
    status: TDetailStatus;
  }) => Promise<IDetail>,
  getDetailCraft: () => void,
  queryClient: any,
) => {
  const { mutateAsync: updateDetailCraft, error: updateError } = useMutation(
    [DETAILS_CRAFT_LIST_KEY, detailCraft],
    (detailCraft: IDetailCraft) => {
      const status = detailCraftStatuses[detailCraft.status].next;

      if (!status) {
        throw new Error("Процесс производства уже завершен.");
      }

      return Api.detailsCraftApi.update(
        {
          status,
        },
        detailCraft.id,
      );
    },
    {
      onSuccess: async () => {
        if (detailCraft?.details_id.status === "INACTIVE")
          await updateDetailStatus({ status: "ASSEMBLY", detailCraft });
        getDetailCraft();
        // queryClient.invalidateQueries(DETAILS_CRAFT_KEY);
        queryClient.invalidateQueries(DETAILS_CRAFT_LIST_KEY);
      },
    },
  );
  return { updateDetailCraft, updateError };
};

export default useUpdateDetailCraft;
