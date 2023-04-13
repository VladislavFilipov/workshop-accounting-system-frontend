/*
  Hook provides method for update current detail status
*/
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Api from "@src/api";
import { DETAIL_KEY, UPDATE_DETAIL_STATUS_KEY } from "@src/const/queryKeys";
import { IDetail, TDetailStatus } from "@src/types/detail";

const useUpdateDetailStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateDetailStatus, error: updateDetailError } =
    useMutation(
      [UPDATE_DETAIL_STATUS_KEY],
      ({ status, detail }: { status: TDetailStatus; detail: IDetail }) =>
        Api.details.updateDetailStatus(
          {
            status,
          },
          detail.id,
        ),
      {
        onSuccess: () => {
          queryClient.invalidateQueries([DETAIL_KEY]);
        },
      },
    );
  return { updateDetailStatus, updateDetailError };
};

export default useUpdateDetailStatus;
