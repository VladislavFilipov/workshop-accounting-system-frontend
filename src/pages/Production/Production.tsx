import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationsList from "@src/components/WorkstationsList";
import SkeletonWorkstationsList from "@src/components/WorkstationsList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import useProdWorkstations from "@src/pages/Production/_hooks/useProdWorkstations";

const Production = () => {
  const [workstations, isLoading, error] = useProdWorkstations();
  return (
    <PageLayout title="Производство" subtitle="Сведения о работе станков">
      <DataContainer
        error={error}
        isLoading={isLoading}
        skeleton={<SkeletonWorkstationsList />}
      >
        {workstations && <WorkstationsList workstations={workstations} />}
      </DataContainer>
    </PageLayout>
  );
};

export default Production;
