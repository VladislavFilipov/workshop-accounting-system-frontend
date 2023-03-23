import { FC } from "react";

import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import useDetailCraftList from "@src/pages/Scanner/_hooks/useDetailCraftList";
import useUpdateDetailCraft from "@src/pages/Scanner/_hooks/useUpdateDetailCraft";
import useUpdateDetailStatus from "@src/pages/Scanner/_hooks/useUpdateDetailStatus";
import SkeletonDetailCraftList from "@src/pages/Scanner/_routes/Stamps/DetailCraftsList/Skeleton";
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
        <Title variant="h3" className={styles.titleH3}>
          Этапы производства
        </Title>
        <DataContainer
          isLoading={listIsFetching}
          error={listError}
          skeleton={<SkeletonDetailCraftList />}
        >
          <ul className={styles.list}>
            {detailCraft &&
              detailCraftsList?.map((detilCraftItem) => (
                <li
                  key={detilCraftItem.id}
                  className={cn(styles.stageItemWrap, {
                    [styles.selected]: detilCraftItem.id === detailCraft?.id,
                  })}
                >
                  <div
                    className={cn(
                      styles.stageItem,
                      styles[detilCraftItem.status],
                    )}
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
