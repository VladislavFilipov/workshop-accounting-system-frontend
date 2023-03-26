/*
  List of requests for production from main CRM-system.
*/
import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PageLayout from "@src/components/_layouts/PageLayout";
import Text from "@src/components/_uikit/Text";
import Request from "@src/pages/Requests/Request/Request";
import useRequests from "@src/pages/Requests/_hooks/useRequests";

import requestStyles from "./Request/Request.module.scss";
import styles from "./Requests.module.scss";

const Requests = () => {
  const [requests, error, isLoading] = useRequests();
  return (
    <PageLayout title="Заявки" subtitle="Список заявок из CRM-системы">
      <DataContainer isLoading={isLoading} error={error}>
        {requests && (
          <ul className={styles.list}>
            <li className={cn(requestStyles.body, styles.head)}>
              <Text>ID</Text>
              <Text>Клиент</Text>
              <Text>Дата создания</Text>
              <Text>Дата отгрузки</Text>
              <Text>Статус</Text>
            </li>
            {requests.map((request) => (
              <Request key={request.id} request={request} />
            ))}
          </ul>
        )}
      </DataContainer>
    </PageLayout>
  );
};

export default Requests;
