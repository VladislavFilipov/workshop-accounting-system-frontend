import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import useAuthStore from "@src/store/auth";

const useActiveWorksList = () => {
  const userId = useAuthStore((state) => state.user?.id);
  const {
    data: activeWorks,
    isLoading,
    error,
  } = useQuery([userId], () => {
    if (!userId) throw new Error("Неизвестный пользователь.");
    return Api.activeWorks.getByUser(userId);
  });

  return { activeWorks, isLoading, error };
};

export default useActiveWorksList;
