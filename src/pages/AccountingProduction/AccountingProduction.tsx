/*
  Scanner connected to the client device scans QR-code that includes id of detail craft and type of processing.
*/
import { Outlet } from "react-router-dom";

import PageLayout from "@src/components/_layouts/PageLayout/PageLayout";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import useInputParse from "@src/pages/AccountingProduction/_hooks/useInputParse";

import styles from "./AccountingProduction.module.scss";

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

        <div className={styles.btns}>
          {/* <Button
            text="Test fill"
            onClick={() => {
              if (inputRef && inputRef.current)
                // inputRef.current.value = `stamp\n7a103371-7548-48a5-aa3a-efd289472ed4`;
                // inputRef.current.value = `stamp\n210b91bd-55da-4166-9e18-68c7258da871`;
                // inputRef.current.value = `stamp\n1`;

                inputRef.current.value = `800000499-80000011`;
              // inputRef.current.value = `item\n23`;
            }}
          /> */}
          <Button text="Получить данные" onClick={handleGetDataClick} />
        </div>

        {parseError && <StatusLabel text={parseError.message} type="error" />}
        <Outlet />
      </>
    </PageLayout>
  );
};

export default ScannerPage;
