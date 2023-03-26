import { useParams } from "react-router-dom";

import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PackstationCard from "@src/components/PackstationCard";
import WorkstationCard from "@src/components/WorkstationCard";
import PageLayout from "@src/components/_layouts/PageLayout";
import Text from "@src/components/_uikit/Text";
import usePackstationById from "@src/pages/PackstationScans/_hooks/usePackstationById";
import usePackstationScans from "@src/pages/PackstationScans/_hooks/usePackstationScans";
import { formatDateStringWithTime } from "@src/utils/date/format";
import { formatUserName } from "@src/utils/userFunctions";

import styles from "./PackstationScans.module.scss";

const PackstationScans = () => {
  const { id } = useParams();

  const [packstation, packIsloading, packError] = usePackstationById(id);
  const [scans, scansIsloading, scansError] = usePackstationScans(id);

  return (
    <PageLayout
      title={`${
        packstation ? packstation.name + " - " : ""
      }История сканирования`}
      subtitle="Список сканирования выбранной фасовочной станции"
    >
      <DataContainer
        isLoading={packIsloading || scansIsloading}
        error={packError || scansError}
      >
        <div className={styles.container}>
          {packstation && <PackstationCard packstation={packstation} />}
          {scans && (
            <ul className={styles.scans}>
              <li className={cn(styles.scan, styles.scanHead)}>
                <Text>Дата и время</Text>
                <Text>Заявка</Text>
                <Text>Товар</Text>
                <Text>Работник</Text>
              </li>
              {scans.map((scan) => (
                <li key={scan.id} className={styles.scan}>
                  <Text>{formatDateStringWithTime(scan.create_date)}</Text>
                  <Text>#{scan.crm_requests.enterprise_id}</Text>
                  <Text>{scan.goods.name}</Text>
                  <Text>{formatUserName(scan.user)}</Text>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DataContainer>
    </PageLayout>
  );
};

export default PackstationScans;
