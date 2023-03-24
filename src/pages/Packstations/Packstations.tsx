import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationCard from "@src/components/WorkstationCard";
import SkeletonWorkstationsList from "@src/components/WorkstationCard/Skeleton";
import cardStyles from "@src/components/WorkstationCard/WorkstationCard.module.scss";
import PageLayout from "@src/components/_layouts/PageLayout";
import Text from "@src/components/_uikit/Text";
import usePackstations from "@src/pages/Packstations/_hooks/usePackstations";

import styles from "./Packstations.module.scss";

const Packstations = () => {
  const [packstations, isLoading, error] = usePackstations();
  return (
    <PageLayout
      title="Фасовка"
      subtitle="Сведения о процессах работ на фасовочных местах"
    >
      <DataContainer
        error={error}
        isLoading={isLoading}
        skeleton={<SkeletonWorkstationsList />}
      >
        {packstations && (
          <ul className={cardStyles.list}>
            {packstations.map((packstation) => (
              <li key={packstation.id}>
                <WorkstationCard workstation={packstation}>
                  <div className={styles.packstation}>
                    <Text size="s" className={styles.description}>
                      {packstation.description}
                    </Text>
                    <Text className={styles.request}>
                      Заявка:{" "}
                      <span>#{packstation.crm_requests.enterprise_id}</span>
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
              </li>
            ))}
          </ul>
        )}
      </DataContainer>
    </PageLayout>
  );
};

export default Packstations;
