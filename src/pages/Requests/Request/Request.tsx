import { FC } from "react";

import { IRequest } from "@src/types/request";

import styles from "./Request.module.scss";

const Request: FC<{ request: IRequest }> = ({ request }) => {
  return (
    <li className={styles.request}>
      <div>
        #{request.enterprise_id}: {request.name}
      </div>
      <ul className={styles.goodsList}>
        {request.request_goods_list.map((goodsItem) => (
          <li key={goodsItem.id}>{goodsItem.name}</li>
        ))}
      </ul>
    </li>
  );
};

export default Request;
