import { useMutation } from "@tanstack/react-query";

import Api from "@src/api";
import { CREATE_PACK_SCAN_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";
import { IAddPackstationScan } from "@src/types/packstation";

const useAddPackagingScan = (): [
  (token: string | undefined) => void,
  any,
  boolean,
  boolean,
] => {
  const userId = useAuthStore((state) => state.user?.id);
  const { mutate, error, isLoading, isSuccess } = useMutation(
    [CREATE_PACK_SCAN_KEY],
    (data: IAddPackstationScan) => {
      return Api.packstations.addScan(data);
    },
  );

  const addPackScan = (token: string | undefined) => {
    console.log("token", token);

    if (!token) return new Error("Error token");
    const data: IAddPackstationScan = {
      user_id: Number(userId),
      token,
      packstation_id: 1,
      goods_id: 1,
      crm_requests_id: 1,
    };

    mutate(data);
  };

  return [addPackScan, error, isLoading, isSuccess];
};

export default useAddPackagingScan;
