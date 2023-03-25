import { Link } from "react-router-dom";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PackstationCard from "@src/components/PackstationCard";
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
                <Link to={`/monitoring/packstations/${packstation.id}`}>
                  <PackstationCard packstation={packstation} />
                  {/* <WorkstationCard
                    workstation={packstation}
                    className={styles.wrap}
                  >
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
                          {packstation.goods.name}
                        </span>
                      </Text>
                      <Text className={styles.count}>
                        Количество: <span>{packstation.pack_count}</span>
                      </Text>
                    </div>
                  </WorkstationCard> */}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </DataContainer>
    </PageLayout>
  );
};

export default Packstations;
