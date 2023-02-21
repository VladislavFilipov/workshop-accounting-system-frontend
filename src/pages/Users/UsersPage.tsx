import { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

import Api from "@src/api";
import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import { USERS_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";
import { IUser } from "@src/types/user";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./UsersPage.module.scss";

const UsersPage: FC = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    error,
  } = useQuery(USERS_KEY, Api.usersApi.getAll);

  const login = useAuthStore((state) => state.login);
  const loginError = useAuthStore((state) => state.error);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>{(error as Error).message}</div>;

  const handleUserClick = async (user: IUser) => {
    login(user);
  };

  return (
    <PageLayout
      title="НАЧАЛО РАБОТЫ"
      subtitle="Пожалуйста, выберите пользователя"
      className={styles.usersPage}
    >
      <ul>
        {users?.map((user) => (
          <div
            className={styles.linkButton}
            key={user.id}
            onClick={() => handleUserClick(user)}
          >
            <div className={styles.text}>{formatUserName(user, true)}</div>
          </div>
        ))}
      </ul>

      {loginError && <StatusLabel text={loginError} type="error" />}
    </PageLayout>
  );
};

export default UsersPage;
