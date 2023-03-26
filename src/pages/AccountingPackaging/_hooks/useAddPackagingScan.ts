import { useMutation } from "@tanstack/react-query";

import Api from "@src/api";
import { CREATE_PACK_SCAN_KEY } from "@src/const/queryKeys";
import usePackstations from "@src/pages/Packstations/_hooks/usePackstations";
import useAuthStore from "@src/store/auth";
import { IAddPackstationScan, IPackstation } from "@src/types/packstation";

const useAddPackagingScan = (): [
  (token: string | undefined) => void,
  any,
  boolean,
  boolean,
] => {
  const [packstations] = usePackstations();
  const userId = useAuthStore((state) => state.user?.id);
  const { mutate, error, isLoading, isSuccess } = useMutation(
    [CREATE_PACK_SCAN_KEY],
    ({
      token,
      userId,
      packstations,
    }: {
      token: string | undefined;
      userId: number | undefined;
      packstations: IPackstation[] | undefined;
    }) => {
      if (!token) throw new Error("Не отсканирован QR-код");
      if (!packstations || !packstations.length)
        throw new Error("Неизвестная фасовочная станция");

      const data: IAddPackstationScan = {
        user_id: Number(userId),
        token,
        packstation_id: packstations[0].id,
        goods_id: packstations[0].goods.id,
        crm_requests_id: packstations[0].crm_requests.id,
      };

      return Api.packstations.addScan(data);
    },
  );

  const addPackScan = (token: string | undefined) => {
    mutate({ token, userId, packstations });
  };

  return [addPackScan, error, isLoading, isSuccess];
};

export default useAddPackagingScan;
