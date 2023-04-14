import { useRef } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PageLayout from "@src/components/_layouts/PageLayout";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import { InputText } from "@src/components/_uikit/_inputs";
import PackstationInfo from "@src/pages/AccountingPackaging/PackstationInfo/PackstationInfo";
import useAddPackagingScan from "@src/pages/AccountingPackaging/_hooks/useAddPackagingScan";

import styles from "./AccountingPackaging.module.scss";

const AccountingPackaging = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [addPackScan, error, isLoading, isSuccess] = useAddPackagingScan();

  const handleAddClick = () => {
    addPackScan(inputRef.current?.value);

    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <PageLayout title="Учет фасовки" subtitle="Отсканируйте QR-код упаковки">
      <InputText
        ref={inputRef}
        autoFocus
        className={styles.input}
        label="QR-код упаковки"
      />
      <Button
        text="Добавить"
        onClick={handleAddClick}
        type="confirm"
        className={styles.addBtn}
      />

      <DataContainer isLoading={isLoading} error={error}>
        {isSuccess && <StatusLabel text="Успешно добавлено" type="success" />}
      </DataContainer>

      <PackstationInfo />
    </PageLayout>
  );
};

export default AccountingPackaging;
