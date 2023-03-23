import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationsList from "@src/components/WorkstationsList";
import SkeletonWorkstationsList from "@src/components/WorkstationsList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import usePackstations from "@src/pages/Packstations/_hooks/usePackstations";

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
        {packstations && <WorkstationsList workstations={packstations} />}
      </DataContainer>
    </PageLayout>
  );
};

export default Packstations;
