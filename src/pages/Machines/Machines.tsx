import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkstationsList from "@src/components/WorkstationsList";
import SkeletonWorkstationsList from "@src/components/WorkstationsList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import useMachines from "@src/pages/Machines/_hooks/useMachines";

const Machines = () => {
  const [machines, isLoading, error] = useMachines();
  return (
    <PageLayout title="Станки" subtitle="Сведения о работе станков">
      <DataContainer
        error={error}
        isLoading={isLoading}
        skeleton={<SkeletonWorkstationsList />}
      >
        {machines && <WorkstationsList workstations={machines} />}
      </DataContainer>
    </PageLayout>
  );
};

export default Machines;
