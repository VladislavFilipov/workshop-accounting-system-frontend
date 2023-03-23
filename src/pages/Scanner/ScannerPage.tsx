import { Outlet } from "react-router-dom";

import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import useInputParse from "@src/pages/Scanner/_hooks/useInputParse";

import styles from "./ScannerPage.module.scss";

const ScannerPage = () => {
  const { parseInput, inputRef, parseError } = useInputParse();

  const handleGetDataClick = () => {
    if (inputRef.current) parseInput(inputRef.current.value);
  };

  return (
    <PageLayout
      title="Учёт работ"
      subtitle="Отсканируйте QR-код этапа производства"
      className={styles.scannerPage}
    >
      <>
        <textarea className={styles.inputToken} ref={inputRef} autoFocus />

        <Button
          text="Test fill"
          onClick={() => {
            if (inputRef && inputRef.current)
              // inputRef.current.value = `stamp\n7a103371-7548-48a5-aa3a-efd289472ed4`;
              // inputRef.current.value = `stamp\n210b91bd-55da-4166-9e18-68c7258da871`;
              // inputRef.current.value = `stamp\n23`;
              inputRef.current.value = `item\n23`;
          }}
        />
        <Button text="Получить данные" onClick={handleGetDataClick} />
        {parseError && <StatusLabel text={parseError.message} type="error" />}
        <Outlet />
      </>
    </PageLayout>
  );
};

export default ScannerPage;
