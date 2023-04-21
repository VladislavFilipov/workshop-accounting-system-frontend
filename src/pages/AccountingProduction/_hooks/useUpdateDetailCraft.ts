/*
  Hook provides method for update current detail craft status
*/
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_LIST_KEY, DETAIL_KEY } from "@src/const/queryKeys";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import useAuthStore from "@src/store/auth";
import { IDetailCraft } from "@src/types/detailCraft";

const useUpdateDetailCraft = () => {
  const queryClient = useQueryClient();
  const userId = useAuthStore((state) => state.user?.id);
  const { mutateAsync: updateDetailCraft, error: updateError } = useMutation(
    [DETAILS_CRAFT_LIST_KEY, userId],
    (detailCraft: IDetailCraft) => {
      const status = detailCraftStatuses[detailCraft.status].next;

      if (!userId) {
        throw new Error("Неизвестный пользователь.");
      }

      if (!status) {
        throw new Error("Процесс производства уже завершен.");
      }

      return Api.detailCraft.update(
        {
          status,
          user_id: userId,
        },
        detailCraft.id,
      );
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([DETAILS_CRAFT_LIST_KEY]);
        queryClient.invalidateQueries([DETAIL_KEY]);
      },
    },
  );
  return { updateDetailCraft, updateError };
};

export default useUpdateDetailCraft;
