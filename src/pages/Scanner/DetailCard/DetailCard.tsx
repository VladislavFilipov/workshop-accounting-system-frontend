import { FC } from "react";

import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailStatuses from "@src/data/detailStatuses";
import useUpdateDetailStatus from "@src/pages/Scanner/_hooks/useUpdateDetailStatus";
import useScannerData from "@src/store/scanner";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./DetailCard.module.scss";

interface IDetailCardProps {
  detailCraft: IDetailCraft;
}

const DetailCard: FC<IDetailCardProps> = ({ detailCraft }) => {
  const canDetailFinish = useScannerData((state) => state.canDetailFinish);

  const { updateDetailStatus, updateDetailError } =
    useUpdateDetailStatus(detailCraft);

  const handleDetailComplete = () => {
    if (detailCraft) updateDetailStatus({ status: "COMPLETE", detailCraft });
  };

  return (
    <div>
      <>
        {detailCraft && (
          <div className={styles.detailCard}>
            {/* <h2 className={styles.titleH2}>Деталь</h2> */}
            <Title variant="h2" className={styles.titleH2}>
              Деталь
            </Title>
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
            onClick={handleDetailComplete}
          />
        )}

        {updateDetailError && (
          <StatusLabel
            text={(updateDetailError as Error).message}
            type="error"
          />
        )}
      </>
    </div>
  );
};

export default DetailCard;
