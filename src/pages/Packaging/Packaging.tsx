import DataContainer from "@src/components/DataContainer/DataContainer";
import WorkplacesList from "@src/components/WorkplacesList";
import SkeletonWorkplacesList from "@src/components/WorkplacesList/Skeleton";
import PageLayout from "@src/components/_layouts/PageLayout";
import usePackWorkplaces from "@src/pages/Packaging/_hooks/usePackWorkplaces";

const Packaging = () => {
  const [workplaces, isLoading, error] = usePackWorkplaces();
  return (
    <PageLayout
      title="Фасовка"
      subtitle="Сведения о процессах работ на фасовочных местах"
    >
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

export default Packaging;