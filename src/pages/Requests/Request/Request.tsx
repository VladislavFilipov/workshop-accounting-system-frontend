import { FC } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import detailStatuses from "@src/data/detailStatuses";
import { IRequest } from "@src/types/request";
import { formatDateString } from "@src/utils/date/format";

import styles from "./Request.module.scss";

const Request: FC<{ request: IRequest }> = ({ request }) => {
  return (
    <li className={styles.request}>
      <div className={styles.body}>
        <Text>#{request.enterprise_id}</Text>
        <Text>{request.client_name}</Text>
        <Text>{formatDateString(request.create_date)}</Text>
        <Text>{formatDateString(request.shippingDate)}</Text>
        <Text className={cn(styles.status, styles[`status${request.status}`])}>
          {detailCraftStatuses[request.status].name}
        </Text>
      </div>
      <ul className={styles.goodsList}>
        <li className={cn(styles.goodsHead, styles.goodsItem)}>
          <Text>Товар</Text>
          <Text>Кол-во</Text>
          <Text>Розн. упаковка</Text>
          <Text>Тран. упаковка</Text>
          <Text>Статус</Text>
        </li>
        {request.request_goods_list.map((goodsItem) => (
          <li className={styles.goodsItem} key={goodsItem.id}>
            <Text>{goodsItem.name}</Text>
            <Text>{goodsItem.amount}</Text>
            <Text>{goodsItem.retail_pack_count} шт.</Text>
            <Text>{goodsItem.transport_pack_count} упак.</Text>
            <Text
              className={cn(styles.status, styles[`status${goodsItem.status}`])}
            >
              {detailCraftStatuses[goodsItem.status].name}
            </Text>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Request;
