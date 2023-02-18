import { FC } from "react";

import accountImage from "@src/assets/account-circle.png";
import userRoles from "@src/data/userRoles";
import useUserStore from "@src/store/auth";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.username}>
          {formatUserName(user, false, "Пользователь не выбран")}
        </div>
        {user && (
          <>
            <div className={styles.role}>
              {userRoles[user.role].toLowerCase()}
            </div>
            <div className={styles.jobs}>
              {user.jobs_id.map((job) => (
                <span key={job.id} className={styles.job}>
                  #{job.name.toLowerCase()}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className={styles.avatar}>
        <img src={accountImage} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
