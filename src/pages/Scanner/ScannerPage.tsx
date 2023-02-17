import { useEffect, useState } from "react";
import { JSONTree } from "react-json-tree";
import { useMutation, useQuery, useQueryClient } from "react-query";

import Api from "@src/api";
import { DETAILS_CRAFT_KEY } from "@src/const/queryKeys";
import useDetailCraftByInput from "@src/pages/Scanner/useDetailCraftByInput";
import { IDetailCraft } from "@src/types/detailCraft";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

import styles from "./ScannerPage.module.scss";

const ScannerPage = () => {
  const queryClient = useQueryClient();
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
    refetch: getDetailCraftsList,
  } = useQuery(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    async () => {
      console.log("getDetailCraftsList detailCraft", detailCraft);
      const detailId: number | undefined = detailCraft?.details_id.id;
      if (!detailId) throw new Error("Error");

      const response: IDetailCraft[] = sortArrayOfObjects(
        await Api.detailsCraftApi.getByDetailId(detailId),
        "stage_number",
        "number",
      );
      return response;
    },
    {
      enabled: !!detailCraft,
    },
  );

  const { mutateAsync: updateDetailCraft, error: updateError } = useMutation(
    [DETAILS_CRAFT_KEY + "list", detailCraft],
    (id: number) =>
      Api.detailsCraftApi.update(
        {
          status: "WORKING",
          // location_id:
        },
        id,
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(DETAILS_CRAFT_KEY);
        queryClient.invalidateQueries(DETAILS_CRAFT_KEY + "list");
      },
    },
  );

  const handleGetDataClick = () => {
    getDetailCraft();
  };

  const handleUpdateClick = () => {
    if (detailCraft) updateDetailCraft(detailCraft.id);
  };

  return (
    <div>
      <textarea ref={inputRef} autoFocus rows={4} cols={50} />
      <br />
      <button
        onClick={() => {
          if (inputRef && inputRef.current)
            inputRef.current.value = `item\n7a103371-7548-48a5-aa3a-efd289472ed4`;
        }}
      >
        Test fill
      </button>

      {/* {inputRef?.current?.value && ( */}
      <button onClick={handleGetDataClick}>Получить данные</button>
      {/* )} */}

      {error ? (
        <p>{(error as Error).message}</p>
      ) : (
        <>
          {typeOfScanning && <p>Тип: {typeOfScanning}</p>}
          <br />
          {detailCraft && (
            <div>
              <h2>Деталь</h2>
              <div>
                <b>Номер:</b> {detailCraft.details_id.tech_number}
              </div>
              <div>
                <b>Название:</b> {detailCraft.details_id.name}
              </div>
              <div>
                <b>Описание:</b> {detailCraft.details_id.description}
              </div>
              <div>
                <b>Количество:</b> {detailCraft.details_id.amount}
              </div>
              <div>
                <b>Статус:</b> {detailCraft.details_id.status}
              </div>
            </div>
          )}
          <br />

          {detailCraftsList && (
            <>
              <h2>Этапы</h2>
              <ul>
                {detailCraftsList.map((detilCraftItem) => (
                  <li
                    key={detilCraftItem.id}
                    className={`${
                      detilCraftItem.stage_number === detailCraft?.stage_number
                        ? styles.selected
                        : ""
                    } ${styles.stageItem}`}
                  >
                    <div>
                      <div>{detilCraftItem?.stage_id.name}</div>
                      <div>{detilCraftItem?.stage_id.description}</div>
                    </div>
                    <div>{detilCraftItem?.status}</div>
                  </li>
                ))}
              </ul>
              {listError && <div>{(listError as Error).message}</div>}
            </>
          )}
          <br />

          {detailCraft && <button onClick={handleUpdateClick}>Учет</button>}
          {updateError && <div>{(updateError as Error)?.message}</div>}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <p>{detailCraft && JSON.stringify(detailCraft)}</p> */}
          {/* <p>{detailCraft && <JSONTree data={detailCraft} />}</p> */}
        </>
      )}
    </div>
  );
};

export default ScannerPage;
