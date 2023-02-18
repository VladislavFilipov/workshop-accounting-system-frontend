import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import Api from "@src/api";
import { USERS_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./UsersPage.module.scss";

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
  if (error) return <div>{(error as Error).message}</div>;

  return (
    <div className={styles.usersPage}>
      <div className={styles.titleMini}>НАЧАЛО РАБОТЫ</div>
      <div className={styles.subtitle}>Пожалуйста, выберите пользователя</div>
      {users?.map((user) => (
        <div
          className={styles.linkButton}
          key={user.id}
          onClick={() => {
            login(user);
            navigate("/");
          }}
        >
          <div className={styles.text}>{formatUserName(user, true)}</div>
        </div>
      ))}
      {/* <button
        onClick={() => {
          login();
          navigate("/");
        }}
      >
        Auth
      </button> */}
    </div>
  );
};

export default UsersPage;
