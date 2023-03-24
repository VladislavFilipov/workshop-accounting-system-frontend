import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationCard from "@src/components/WorkstationCard";
import SkeletonWorkstationsList from "@src/components/WorkstationCard/Skeleton";
import cardStyles from "@src/components/WorkstationCard/WorkstationCard.module.scss";
import PageLayout from "@src/components/_layouts/PageLayout";
import Text from "@src/components/_uikit/Text";
import useMachines from "@src/pages/Machines/_hooks/useMachines";

import styles from "./Machines.module.scss";

const Machines = () => {
  const [machines, isLoading, error] = useMachines();
  return (
    <PageLayout title="Станки" subtitle="Сведения о работе станков">
      <DataContainer
        error={error}
        isLoading={isLoading}
        skeleton={<SkeletonWorkstationsList />}
      >
        {machines && (
          <ul className={cardStyles.list}>
            {machines.map((machine) => (
              <li key={machine.id}>
                <WorkstationCard workstation={machine}>
                  <div className={styles.machine}>
                    <Text size="s" className={styles.description}>
                      {machine.description}
                    </Text>
                    <Text className={styles.count}>
                      Количество: <span>{machine.count}</span>
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

export default Machines;
