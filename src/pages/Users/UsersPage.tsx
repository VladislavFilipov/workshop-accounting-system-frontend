/*
  Users list provides fake authorization. In future will be replaces to real.
*/
import { FC } from "react";
import { Navigate } from "react-router-dom";

import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import useUsers from "@src/pages/Users/_hooks/useUsers";
import useAuthStore from "@src/store/auth";
import { IUser } from "@src/types/user";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./UsersPage.module.scss";

const UsersPage: FC = () => {
  const { users, isLoading, error } = useUsers();

  const login = useAuthStore((state) => state.login);
  const loginError = useAuthStore((state) => state.error);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);

  const handleUserClick = async (user: IUser) => {
    login(user);
  };

  if (isAuthorized) return <Navigate to={"/"} />;

  return (
    <PageLayout
      title="НАЧАЛО РАБОТЫ"
      subtitle="Пожалуйста, выберите пользователя"
      className={styles.usersPage}
    >
      <DataContainer isLoading={isLoading} error={error}>
        <ul>
          {users?.map((user) => (
            <Button
              key={user.id}
              text={formatUserName(user, false)}
              className={cn(styles.userButton)}
              onClick={() => handleUserClick(user)}
              size="l"
            />
          ))}
        </ul>
      </DataContainer>
      {loginError && <StatusLabel text={loginError} type="error" />}
    </PageLayout>
  );
};

export default UsersPage;
