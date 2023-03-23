import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationsList from "@src/components/WorkstationsList";
import SkeletonWorkstationsList from "@src/components/WorkstationsList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import usePackWorkstations from "@src/pages/Packaging/_hooks/usePackWorkstations";

const Packaging = () => {
  const [workplaces, isLoading, error] = usePackWorkstations();
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
        {workplaces && <WorkstationsList workstations={workplaces} />}
      </DataContainer>
    </PageLayout>
  );
};

export default Packaging;
