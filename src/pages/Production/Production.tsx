import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkplacesList from "@src/components/WorkplacesList";
import SkeletonWorkplacesList from "@src/components/WorkplacesList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import useProdWorkplaces from "@src/pages/Production/_hooks/useProdWorkplaces";

const Production = () => {
  const [workplaces, isLoading, error] = useProdWorkplaces();
  return (
    <PageLayout title="Производство" subtitle="Сведения о работе станков">
      <DataContainer
        error={error}
        isLoading={isLoading}
        skeleton={<SkeletonWorkplacesList />}
      >
        {workplaces && <WorkplacesList workplaces={workplaces} />}
      </DataContainer>
    </PageLayout>
  );
};

export default Production;
