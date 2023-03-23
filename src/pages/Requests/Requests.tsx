import DataContainer from "@src/components/DataContainer/DataContainer";
import PageLayout from "@src/components/_layouts/PageLayout";
import Request from "@src/pages/Requests/Request/Request";
import useRequests from "@src/pages/Requests/_hooks/useRequests";

import styles from "./Requests.module.scss";

const Requests = () => {
  const [requests, error, isLoading] = useRequests();
  return (
    <PageLayout title="Заявки" subtitle="Список заявок из CRM-системы">
      <DataContainer isLoading={isLoading} error={error}>
        {requests && (
          <ul>
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
