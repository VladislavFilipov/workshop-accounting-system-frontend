import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkplaceCard from "@src/components/WorkplaceCard";
import PageLayout from "@src/components/_layouts/PageLayout";
import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import usePackWorkplaces from "@src/pages/Packaging/_hooks/usePackWorkplaces";

import styles from "./Packaging.module.scss";

const Packaging = () => {
  const [workplaces, isLoading, error] = usePackWorkplaces();
  return (
    <PageLayout
      title="Фасовка"
      subtitle="Сведения о процессах работ на фасовочных местах"
    >
      <DataContainer error={error} isLoading={isLoading}>
        {workplaces && (
          <ul className={styles.list}>
            {workplaces.map((workplace) => (
              <li key={workplace.id}>
                <WorkplaceCard workplace={workplace} />
              </li>
            ))}
          </ul>
        )}
      </DataContainer>
    </PageLayout>
  );
};

export default Packaging;
