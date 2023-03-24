import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationCard from "@src/components/WorkstationCard";
import Text from "@src/components/_uikit/Text";
import styles from "@src/pages/Packstations/Packstations.module.scss";
import usePackstations from "@src/pages/Packstations/_hooks/usePackstations";

const PackstationInfo: FC = () => {
  const [packstations, isLoading, error] = usePackstations();

  const packstation = packstations && packstations[0];
  return (
    <DataContainer isLoading={isLoading} error={error}>
      {packstation && (
        <WorkstationCard workstation={packstation}>
          <div className={styles.packstation}>
            <Text size="s" className={styles.description}>
              {packstation.description}
            </Text>
            <Text className={styles.request}>
              Заявка: <span>#{packstation.crm_requests.enterprise_id}</span>
            </Text>
            <Text className={styles.goodsItem}>
              Товар:{" "}
              <span>
                {/* {packstation.goods.vendor_code} -  */}
                {packstation.goods.name}
              </span>
            </Text>
            <Text className={styles.count}>
              Количество: <span>{packstation.pack_count}</span>
            </Text>
          </div>
        </WorkstationCard>
      )}
    </DataContainer>
  );
};

export default PackstationInfo;
