import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { REQUESTS_LIST_KEY } from "@src/const/queryKeys";
import { IRequest } from "@src/types/request";

const useRequests = (): [IRequest[] | undefined, any, boolean] => {
  const {
    data: requests,
    error,
    isLoading,
  } = useQuery([REQUESTS_LIST_KEY], () => Api.requests.getAll());
  return [requests, error, isLoading];
};

export default useRequests;
