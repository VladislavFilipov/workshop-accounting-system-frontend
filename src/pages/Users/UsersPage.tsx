import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import Api from "@src/api";
import { USERS_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";
import { formatUserName } from "@src/utils/userFunctions";

interface IUsersPageProps {}

const UsersPage: FC<IUsersPageProps> = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    error,
  } = useQuery(USERS_KEY, Api.usersApi.getAll);

  const login = useAuthStore((state) => state.login);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>{(error as AxiosError).message}</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id} onClick={() => login(user)}>
          {formatUserName(user)}
        </li>
      ))}
      {/* <button
        onClick={() => {
          login();
          navigate("/");
        }}
      >
        Auth
      </button> */}
    </ul>
  );
};

export default UsersPage;
