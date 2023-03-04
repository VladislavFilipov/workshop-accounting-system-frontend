import { FC } from "react";

import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import useDetailCraftList from "@src/pages/Scanner/_hooks/useDetailCraftList";
import useUpdateDetailCraft from "@src/pages/Scanner/_hooks/useUpdateDetailCraft";
import { IUpdateDetailStatus } from "@src/pages/Scanner/_types";
import useScannerData from "@src/store/scanner";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./DetailCraftsList.module.scss";

interface IDetailCraftsListProps {
  detailCraft: IDetailCraft;
  updateDetailStatus: IUpdateDetailStatus;
  getDetailCraft: () => void;
}

const DetailCraftsList: FC<IDetailCraftsListProps> = ({
  detailCraft,
  updateDetailStatus,
  getDetailCraft,
}) => {
  const canUpdate = useScannerData((state) => state.canUpdate);

  const { detailCraftsList, listError, listIsFetching } =
    useDetailCraftList(detailCraft);

  const { updateDetailCraft, updateError } = useUpdateDetailCraft(
    detailCraft,
    updateDetailStatus,
    getDetailCraft,
  );

  const handleUpdateClick = (detailCraft: IDetailCraft) => {
    updateDetailCraft(detailCraft);
  };

  return (
    <div className={styles.stages}>
      <>
        <Title variant="h2">Этапы производства</Title>
        {/* <h2 className={styles.titleH2}>Этапы производства</h2> */}
        {listIsFetching ? (
          <>Загрузка...</>
        ) : listError ? (
          <StatusLabel text={(listError as Error).message} type="error" />
        ) : (
          <ul>
            {detailCraft &&
              detailCraftsList?.map((detilCraftItem) => (
                <li key={detilCraftItem.id} className={styles.stageItemWrap}>
                  <div
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
                  )}
                </li>
              ))}
          </ul>
        )}

        {updateError && (
          <StatusLabel text={(updateError as Error).message} type="error" />
        )}
      </>
    </div>
  );
};

export default DetailCraftsList;
