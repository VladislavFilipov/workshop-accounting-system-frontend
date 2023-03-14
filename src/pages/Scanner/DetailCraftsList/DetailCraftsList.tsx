import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import SkeletonDetailCraftList from "@src/pages/Scanner/DetailCraftsList/Skeleton";
import useDetailCraftList from "@src/pages/Scanner/_hooks/useDetailCraftList";
import useUpdateDetailCraft from "@src/pages/Scanner/_hooks/useUpdateDetailCraft";
import useUpdateDetailStatus from "@src/pages/Scanner/_hooks/useUpdateDetailStatus";
import useScannerData from "@src/store/scanner";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./DetailCraftsList.module.scss";

interface IDetailCraftsListProps {
  detailCraft: IDetailCraft;
}

const DetailCraftsList: FC<IDetailCraftsListProps> = ({ detailCraft }) => {
  const canUpdate = useScannerData((state) => state.canUpdate);

  const { detailCraftsList, listError, listIsFetching } =
    useDetailCraftList(detailCraft);

  const { updateDetailCraft, updateError } = useUpdateDetailCraft(detailCraft);

  const { updateDetailStatus } = useUpdateDetailStatus(detailCraft);

  const handleUpdateClick = (detailCraft: IDetailCraft) => {
    updateDetailCraft(detailCraft, {
      onSuccess: () => {
        updateDetailStatus({ status: "ASSEMBLY", detailCraft });
      },
    });
  };

  console.log("canUpdate", canUpdate);

  return (
    <div className={styles.stages}>
      <>
        <Title variant="h2">Этапы производства</Title>
        <DataContainer
          isLoading={listIsFetching}
          error={listError}
          skeleton={<SkeletonDetailCraftList />}
        >
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
        </DataContainer>

        {updateError && (
          <StatusLabel text={(updateError as Error).message} type="error" />
        )}
      </>
    </div>
  );
};

export default DetailCraftsList;
