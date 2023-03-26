/*
  Hook provides method for update current detail craft status
*/
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Api from "@src/api";
import {
  DETAILS_CRAFT_KEY,
  DETAILS_CRAFT_LIST_KEY,
} from "@src/const/queryKeys";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import { IDetailCraft } from "@src/types/detailCraft";

const useUpdateDetailCraft = (detailCraft: IDetailCraft | undefined) => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateDetailCraft, error: updateError } = useMutation(
    [DETAILS_CRAFT_LIST_KEY, detailCraft],
    (detailCraft: IDetailCraft) => {
      const status = detailCraftStatuses[detailCraft.status].next;

      if (!status) {
        throw new Error("Процесс производства уже завершен.");
      }

      return Api.detailCraft.update(
        {
          status,
        },
        detailCraft.id,
      );
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([DETAILS_CRAFT_KEY]);
        queryClient.invalidateQueries([DETAILS_CRAFT_LIST_KEY]);
      },
    },
  );
  return { updateDetailCraft, updateError };
};

export default useUpdateDetailCraft;
