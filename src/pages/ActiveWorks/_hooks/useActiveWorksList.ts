import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { ACTIVE_WORKS_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";

const useActiveWorksList = () => {
  const userId = useAuthStore((state) => state.user?.id);
  const {
    data: activeWorks,
    isLoading,
    error,
  } = useQuery([ACTIVE_WORKS_KEY, userId], () => {
    if (!userId) throw new Error("Неизвестный пользователь.");
    return Api.activeWorks.getByUser(userId);
  });

  return { activeWorks, isLoading, error };
};

export default useActiveWorksList;
