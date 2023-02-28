import { FC } from "react";

import { QueryObserverResult } from "@tanstack/react-query";

import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import detailStatuses from "@src/data/detailStatuses";
import useUpdateDetailStatus from "@src/pages/Scanner/_hooks/useUpdateDetailStatus";
import { IUpdateDetailStatus } from "@src/pages/Scanner/_types";
import useScannerData from "@src/store/scanner";
import { TDetailStatus } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./DetailCard.module.scss";

interface IDetailCardProps {
  detailCraft: IDetailCraft;
  updateDetailStatus: IUpdateDetailStatus;
  updateDetailError: Error;
}

const DetailCard: FC<IDetailCardProps> = ({
  detailCraft,
  updateDetailStatus,
  updateDetailError,
}) => {
  const canDetailFinish = useScannerData((state) => state.canDetailFinish);

  const handleDetailComplete = () => {
    if (detailCraft) updateDetailStatus({ status: "COMPLETE", detailCraft });
  };

  return (
    <div>
      {detailCraft && (
        <div className={styles.detailCard}>
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

      {canDetailFinish && detailCraft?.details_id.status !== "COMPLETE" && (
        <Button
          text="Завершить деталь"
          type="confirm"
          onClick={() => handleDetailComplete()}
        />
      )}

      {updateDetailError && (
        <StatusLabel text={updateDetailError.message} type="error" />
      )}
    </div>
  );
};

export default DetailCard;
