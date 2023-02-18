import { useEffect, useState } from "react";
import { JSONTree } from "react-json-tree";
import { useMutation, useQuery, useQueryClient } from "react-query";

import Api from "@src/api";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import { formatDetailCraftsList } from "@src/pages/Scanner/functions/formatDetailCraftsList";
import {
  detailCraftStatuses,
  detailStatuses,
} from "@src/pages/Scanner/objects";
import useDetailCraftByInput from "@src/pages/Scanner/useDetailCraftByInput";
import { TDetailStatus } from "@src/types/detail";
import { IDetailCraft, TDetailCraftStatus } from "@src/types/detailCraft";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

import styles from "./ScannerPage.module.scss";

const ScannerPage = () => {
  const queryClient = useQueryClient();

  const [canUpdate, setCanUpdate] = useState<boolean>(false);
  const [canDetailComplete, setCanDetailComplete] = useState<boolean>(false);

  const {
    detailCraft,
    getDetailCraft,
    typeOfScanning,
    error,
    isFetching,
    inputRef,
  } = useDetailCraftByInput();

  const {
    data: detailCraftsList,
    error: listError,
    // refetch: getDetailCraftsList,
  } = useQuery(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    async () => {
      console.log("getDetailCraftsList detailCraft", detailCraft);
      const detailId: number | undefined = detailCraft?.details_id.id;
      if (!detailId) throw new Error("Error");

      const { sortedList, canUpdate, canDetailComplete } =
        formatDetailCraftsList(
          await Api.detailsCraftApi.getByDetailId(detailId),
          detailCraft as IDetailCraft,
        );

      setCanUpdate(canUpdate);
      setCanDetailComplete(canDetailComplete);

      return sortedList;
    },
    {
      enabled: !!detailCraft,
    },
  );

  const { mutateAsync: updateDetailCraft, error: updateError } = useMutation(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    (detailCraft: IDetailCraft) => {
      const status = detailCraftStatuses[detailCraft.status].next;

      if (!status) {
        throw new Error("Процесс производства уже завершен.");
      }
      return Api.detailsCraftApi.update(
        {
          status,
        },
        detailCraft.id,
      );
    },
    {
      onSuccess: async () => {
        if (detailCraft?.details_id.status === "INACTIVE")
          await updateDetailStatus({ status: "ASSEMBLY", detailCraft });
        getDetailCraft();
        // queryClient.invalidateQueries(DETAILS_CRAFT_KEY);
        queryClient.invalidateQueries(DETAILS_CRAFT_KEY + "list");
      },
    },
  );

  const { mutateAsync: updateDetailStatus, error: updateDetailError } =
    useMutation(
      [DETAILS_CRAFT_KEY + "detail", detailCraft],
      ({
        status,
        detailCraft,
      }: {
        status: TDetailStatus;
        detailCraft: IDetailCraft;
      }) =>
        Api.detailsApi.updateDetailStatus(
          {
            status,
          },
          detailCraft.details_id.id,
        ),
      {
        onSuccess: () => {
          getDetailCraft();
          // queryClient.invalidateQueries(DETAILS_CRAFT_KEY);
        },
      },
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

      {/* <Button
        text="Test fill"
        onClick={() => {
          if (inputRef && inputRef.current)
            // inputRef.current.value = `item\n7a103371-7548-48a5-aa3a-efd289472ed4`;
            inputRef.current.value = `item\n210b91bd-55da-4166-9e18-68c7258da871`;
        }}
      /> */}
      <Button text="Получить данные" onClick={handleGetDataClick} />

      {error ? (
        <StatusLabel text={(error as Error).message} type="error" />
      ) : (
        <>
          {/* {typeOfScanning && <p>Тип: {typeOfScanning}</p>} */}

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

          {detailCraftsList && (
            <div className={styles.stages}>
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
                          detailCraftStatuses[detilCraftItem.status].buttonText
                        }
                        type="confirm"
                        onClick={() => handleUpdateClick(detilCraftItem)}
                      />
                      // <div>
                      //   <button
                      //     onClick={() => handleUpdateClick(detilCraftItem)}
                      //   >
                      //     Учет
                      //   </button>
                      // </div>
                    )}
                  </li>
                ))}
              </ul>

              {listError && (
                <StatusLabel text={(listError as Error).message} type="error" />
              )}
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
