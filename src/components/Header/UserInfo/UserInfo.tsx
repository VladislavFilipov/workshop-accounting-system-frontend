import { FC } from "react";

import useUserStore from "@src/store/auth";
import { formatUserName } from "@src/utils/userFunctions";

const UserInfo: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <div>{formatUserName(user, false)}</div>
    </div>
  );
};

export default UserInfo;
