import { FC } from "react";

import { useQuery } from "@tanstack/react-query";
import cn from "classnames";

import Api from "@src/api";
import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import { USERS_KEY } from "@src/const/queryKeys";
import useAuthStore from "@src/store/auth";
import menuButtonStyles from "@src/styles/modules/menuButton.module.scss";
import { IUser } from "@src/types/user";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./UsersPage.module.scss";

const UsersPage: FC = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery([USERS_KEY], Api.users.getAll);

  const login = useAuthStore((state) => state.login);
  const loginError = useAuthStore((state) => state.error);

  const handleUserClick = async (user: IUser) => {
    login(user);
  };

  return (
    <PageLayout
      title="НАЧАЛО РАБОТЫ"
      subtitle="Пожалуйста, выберите пользователя"
      className={styles.usersPage}
    >
      {isLoading ? (
        <>Загрузка...</>
      ) : error ? (
        <StatusLabel text={(error as Error).message} type="error" />
      ) : (
        <ul>
          {users?.map((user) => (
            <div
              className={cn(styles.linkButton, menuButtonStyles.menuButton)}
              key={user.id}
              onClick={() => handleUserClick(user)}
            >
              <div className={menuButtonStyles.text}>
                {formatUserName(user, true)}
              </div>
            </div>
          ))}
        </ul>
      )}

      {loginError && <StatusLabel text={loginError} type="error" />}
    </PageLayout>
  );
};

export default UsersPage;
