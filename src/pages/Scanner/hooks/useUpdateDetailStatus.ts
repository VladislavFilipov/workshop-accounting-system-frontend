import { QueryObserverResult, useMutation } from "react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_DETAIL_KEY } from "@src/const/queryKeys";
import { TDetailStatus } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

const useUpdateDetailStatus = (
  detailCraft: IDetailCraft | undefined,
  getDetailCraft: () => Promise<QueryObserverResult<IDetailCraft, unknown>>,
) => {
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
        Api.detailsApi.updateDetailStatus(
          {
            status,
          },
          detailCraft.details_id.id,
        ),
      {
        onSuccess: () => {
          getDetailCraft();
          // queryClient.invalidateQueries(DETAILS_CRAFT_KEY);
        },
      },
    );
  return { updateDetailStatus, updateDetailError };
};

export default useUpdateDetailStatus;
