import PageLayout from "@src/components/_layouts/PageLayout";
import Title from "@src/components/_uikit/Title";
import ActiveWorksList from "@src/pages/ActiveWorks/ActiveWorksList/ActiveWorksList";

import styles from "./ActiveWorksPage.module.scss";

const ActiveWorks = () => {
  return (
    <PageLayout
      title="Активные работы"
      subtitle="Для просмотра подробностей кликните по нужной работе в списке"
    >
      <Title variant="h1" className={styles.title}>
        Статус работ
      </Title>

      <ActiveWorksList />
    </PageLayout>
  );
};

export default ActiveWorks;
