/*
  Information about the detail to witch the current detail craft belongs
*/
import { FC } from "react";

import cn from "classnames";

import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailStatuses from "@src/data/detailStatuses";
import useUpdateDetailStatus from "@src/pages/AccountingProduction/_hooks/useUpdateDetailStatus";
import useScannerData from "@src/store/scanner";
import { IDetail } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";
import { IStamp } from "@src/types/stamp";

import styles from "./DetailCard.module.scss";

interface IDetailCardProps {
  detailCraft: IDetailCraft;
  detail: IDetail;
  stamp?: IStamp;
}

const DetailCard: FC<IDetailCardProps> = ({ detail, stamp }) => {
  console.log(detail.status);

  return (
    <div>
      <>
        {
          <div className={styles.detailCard}>
            {stamp && (
              <>
                <Title variant="h3" className={styles.titleH3}>
                  Штамп
                </Title>
                <div className={styles.line}>
                  <span>Номер</span> {stamp.tech_number}
                </div>
                <div className={styles.line}>
                  <span>Название</span> {stamp.name}
                </div>
              </>
            )}
            <Title variant="h3" className={styles.titleH3}>
              Деталь
            </Title>
            <div className={styles.line}>
              <span>Номер</span> {detail.tech_number}
            </div>
            <div className={styles.line}>
              <span>Название</span> {detail.name}
            </div>
            <div className={styles.line}>
              <span>Описание</span> {detail.description}
            </div>
            <div className={styles.line}>
              <span>Количество</span> {detail.amount}
            </div>
            <div className={cn(styles.line, styles.statusLine)}>
              <span>Статус</span>
              <div
                className={cn(styles.status, styles["status" + detail.status])}
              >
                {detailStatuses[detail.status]?.name}
              </div>
            </div>
          </div>
        }
      </>
    </div>
  );
};

export default DetailCard;
