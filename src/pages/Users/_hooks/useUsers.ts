import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { USERS_KEY } from "@src/const/queryKeys";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

const useUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery([USERS_KEY], async () => {
    let usersRes = await Api.users.getAll();

    usersRes = usersRes.filter(
      (user) =>
        user.status !== "FIRED" &&
        user.location_id.location_name === "Лепсари-Цех",
    );
    return sortArrayOfObjects(usersRes, "last_name", "string");
  });
  return {
    users,
    isLoading,
    error,
  };
};

export default useUsers;
