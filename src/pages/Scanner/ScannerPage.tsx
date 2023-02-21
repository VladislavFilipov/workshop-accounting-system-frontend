import { useState } from "react";
import { useQueryClient } from "react-query";

import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import detailStatuses from "@src/data/detailStatuses";
import useDetailCraftByInput from "@src/pages/Scanner/hooks/useDetailCraftByInput";
import useDetailCraftList from "@src/pages/Scanner/hooks/useDetailCraftList";
import useUpdateDetailCraft from "@src/pages/Scanner/hooks/useUpdateDetailCraft";
import useUpdateDetailStatus from "@src/pages/Scanner/hooks/useUpdateDetailStatus";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./ScannerPage.module.scss";

const ScannerPage = () => {
  const queryClient = useQueryClient();

  const [canUpdate, setCanUpdate] = useState<boolean>(false);
  const [canDetailComplete, setCanDetailComplete] = useState<boolean>(false);

  const { detailCraft, getDetailCraft, typeOfScanning, error, inputRef } =
    useDetailCraftByInput();

  const { detailCraftsList, listError } = useDetailCraftList(
    detailCraft,
    setCanUpdate,
    setCanDetailComplete,
  );

  const { updateDetailStatus, updateDetailError } = useUpdateDetailStatus(
    detailCraft,
    getDetailCraft,
  );

  const { updateDetailCraft, updateError } = useUpdateDetailCraft(
    detailCraft,
    updateDetailStatus,
    getDetailCraft,
    queryClient,
  );

  const handleGetDataClick = () => {
    getDetailCraft();
  };

  const handleUpdateClick = (detailCraft: IDetailCraft) => {
    updateDetailCraft(detailCraft);
  };

  const handleDetailComplete = () => {
    if (detailCraft) updateDetailStatus({ status: "COMPLETE", detailCraft });
  };

  return (
    <div className={styles.scannerPage}>
      <div className={styles.titleMini}>УЧЕТ РАБОТ</div>
      <div className={styles.subtitle}>
        Отсканируйте QR-код этапа производства
      </div>
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

      {error ? (
        <StatusLabel text={(error as Error).message} type="error" />
      ) : (
        <>
          {detailCraft && (
            <div className={styles.detailInfo}>
              <h2 className={styles.titleH2}>Деталь</h2>
              <div className={styles.line}>
                <span>Номер</span> {detailCraft.details_id.tech_number}
              </div>
              <div className={styles.line}>
                <span>Название</span> {detailCraft.details_id.name}
              </div>
              <div className={styles.line}>
                <span>Описание</span> {detailCraft.details_id.description}
              </div>
              <div className={styles.line}>
                <span>Количество</span> {detailCraft.details_id.amount}
              </div>
              <div className={styles.line}>
                <span>Статус</span>{" "}
                {detailStatuses[detailCraft.details_id.status]?.name}
              </div>
            </div>
          )}

          {canDetailComplete &&
            detailCraft?.details_id.status !== "COMPLETE" && (
              <Button
                text="Завершить деталь"
                type="confirm"
                onClick={() => handleDetailComplete()}
              />
            )}

          {updateDetailError && (
            <StatusLabel
              text={(updateDetailError as Error).message}
              type="error"
            />
          )}

          {detailCraftsList && (
            <div className={styles.stages}>
              <>
                <h2 className={styles.titleH2}>Этапы производства</h2>
                <ul>
                  {detailCraftsList.map((detilCraftItem) => (
                    <li className={styles.stageItemWrap}>
                      <div
                        key={detilCraftItem.id}
                        className={`${styles.stageItem} ${
                          styles[detilCraftItem.status]
                        } ${
                          detilCraftItem.id === detailCraft?.id
                            ? styles.selected
                            : ""
                        }`}
                      >
                        <div className={styles.stageStatus}>
                          {detailCraftStatuses[detilCraftItem.status].name}
                        </div>
                        <div>
                          <div className={styles.stageName}>
                            {detilCraftItem?.stage_id.name}
                          </div>
                          <div className={styles.stageDesc}>
                            {detilCraftItem?.stage_id.description}
                          </div>
                        </div>
                      </div>

                      {detilCraftItem.id === detailCraft?.id && canUpdate && (
                        <Button
                          text={
                            detailCraftStatuses[detilCraftItem.status]
                              .buttonText
                          }
                          type="confirm"
                          onClick={() => handleUpdateClick(detilCraftItem)}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                {listError && (
                  <StatusLabel
                    text={(listError as Error).message}
                    type="error"
                  />
                )}
              </>
            </div>
          )}

          {updateError && (
            <StatusLabel text={(updateError as Error).message} type="error" />
          )}
        </>
      )}
    </div>
  );
};

export default ScannerPage;
