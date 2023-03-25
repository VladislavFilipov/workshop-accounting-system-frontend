import { FC } from "react";

import WorkstationCard from "@src/components/WorkstationCard";
import Text from "@src/components/_uikit/Text";
import { IPackstation } from "@src/types/packstation";

import styles from "./PackstationCard.module.scss";

const PackstationCard: FC<{ packstation: IPackstation }> = ({
  packstation,
}) => {
  return (
    <WorkstationCard workstation={packstation} className={styles.wrap}>
      <div className={styles.packstation}>
        <Text size="s" className={styles.description}>
          {packstation.description}
        </Text>
        <Text className={styles.request}>
          Заявка: <span>#{packstation.crm_requests.enterprise_id}</span>
        </Text>
        <Text className={styles.goodsItem}>
          Товар: <span>{packstation.goods.name}</span>
        </Text>
        <Text className={styles.count}>
          Количество: <span>{packstation.pack_count}</span>
        </Text>
      </div>
    </WorkstationCard>
  );
};

export default PackstationCard;
