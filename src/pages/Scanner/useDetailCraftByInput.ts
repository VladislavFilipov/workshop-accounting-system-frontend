import { useRef, useState } from "react";
import { useQuery } from "react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import { IDetailCraft } from "@src/types/detailCraft";

type TTypeOfScanning = "item" | "stamp";

const useDetailCraftByInput = (
  onSuccess?: (detailCraft: IDetailCraft) => void,
) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [typeOfScanning, setTypeOfScanning] = useState<
    TTypeOfScanning | undefined
  >(undefined);

  const {
    data: detailCraft,
    error,
    isFetching,
    refetch: getDetailCraft,
  } = useQuery(
    DETAILS_CRAFT_KEY,
    () => {
      if (inputRef && inputRef.current && inputRef.current.value) {
        // try {
        const [type, token] = inputRef.current.value.split("\n");

        if (!["item", "stamp"].includes(type)) {
          setTypeOfScanning(undefined);
          throw new Error("Некорректные данные");
        }
        setTypeOfScanning(type as TTypeOfScanning);

        return Api.detailsCraftApi.getByToken(token);
      } else {
        throw new Error("Отсканируйте QR-код");
      }
    },
    {
      enabled: false,
      // onSuccess,
    },
  );

  return {
    detailCraft,
    getDetailCraft,
    typeOfScanning,
    error,
    isFetching,
    inputRef,
  };
};

export default useDetailCraftByInput;
