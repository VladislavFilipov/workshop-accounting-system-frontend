import { useMutation, useQueryClient } from "@tanstack/react-query";

import Api from "@src/api";
import {
  DETAILS_CRAFT_DETAIL_KEY,
  DETAILS_CRAFT_KEY,
} from "@src/const/queryKeys";
import { TDetailStatus } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

const useUpdateDetailStatus = (detailCraft: IDetailCraft | undefined) => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateDetailStatus, error: updateDetailError } =
    useMutation(
      [DETAILS_CRAFT_DETAIL_KEY, detailCraft],
      ({
        status,
        detailCraft,
      }: {
        status: TDetailStatus;
        detailCraft: IDetailCraft;
      }) =>
        Api.details.updateDetailStatus(
          {
            status,
          },
          detailCraft.details_id.id,
        ),
      {
        onSuccess: () => {
          queryClient.invalidateQueries([DETAILS_CRAFT_KEY]);
        },
      },
    );
  return { updateDetailStatus, updateDetailError };
};

export default useUpdateDetailStatus;
