import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import DetailCard from "@src/pages/Scanner/DetailCard/DetailCard";
import DetailCraftsList from "@src/pages/Scanner/DetailCraftsList/DetailCraftsList";
import useDetailCraftByInput from "@src/pages/Scanner/_hooks/useDetailCraftByInput";
import useUpdateDetailStatus from "@src/pages/Scanner/_hooks/useUpdateDetailStatus";

import styles from "./ScannerPage.module.scss";

const ScannerPage = () => {
  const { detailCraft, getDetailCraft, typeOfScanning, error, inputRef } =
    useDetailCraftByInput();

  const { updateDetailStatus, updateDetailError } = useUpdateDetailStatus(
    detailCraft,
    getDetailCraft,
  );

  const handleGetDataClick = () => {
    getDetailCraft();
  };

  return (
    <PageLayout
      title="УЧЕТ РАБОТ"
      subtitle="Отсканируйте QR-код этапа производства"
      className={styles.scannerPage}
    >
      <>
        <textarea className={styles.inputToken} ref={inputRef} autoFocus />

        <Button
          text="Test fill"
          onClick={() => {
            if (inputRef && inputRef.current)
              // inputRef.current.value = `item\n7a103371-7548-48a5-aa3a-efd289472ed4`;
              inputRef.current.value = `item\n210b91bd-55da-4166-9e18-68c7258da871`;
          }}
        />
        <Button text="Получить данные" onClick={handleGetDataClick} />

        {error && <StatusLabel text={(error as Error).message} type="error" />}

        {detailCraft && (
          <>
            <DetailCard
              detailCraft={detailCraft}
              updateDetailStatus={updateDetailStatus}
              updateDetailError={updateDetailError as Error}
            />

            <DetailCraftsList
              detailCraft={detailCraft}
              updateDetailStatus={updateDetailStatus}
              getDetailCraft={getDetailCraft}
            />
          </>
        )}
      </>
    </PageLayout>
  );
};

export default ScannerPage;
