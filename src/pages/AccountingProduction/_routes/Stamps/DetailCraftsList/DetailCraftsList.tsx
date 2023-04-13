/*
  Information about all detail crafts of the detail to witch the current detail craft belongs
*/
import { FC } from "react";

import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Button from "@src/components/_uikit/Button/Button";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import detailCraftStatuses from "@src/data/detailCraftStatuses";
import useDetailCraftList from "@src/pages/AccountingProduction/_hooks/useDetailCraftList";
import useUpdateDetailCraft from "@src/pages/AccountingProduction/_hooks/useUpdateDetailCraft";
import useUpdateDetailStatus from "@src/pages/AccountingProduction/_hooks/useUpdateDetailStatus";
import SkeletonDetailCraftList from "@src/pages/AccountingProduction/_routes/Stamps/DetailCraftsList/Skeleton";
import useScannerData from "@src/store/scanner";
import { IDetail } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./DetailCraftsList.module.scss";

interface IDetailCraftsListProps {
  detail: IDetail;
}

const DetailCraftsList: FC<IDetailCraftsListProps> = ({ detail }) => {
  const curDetailCraftId = useScannerData((state) => state.curDetailCraftId);

  const { detailCraftsList, listError, listIsFetching } =
    useDetailCraftList(detail);

  const { updateDetailCraft, updateError } = useUpdateDetailCraft();

  // const { updateDetailStatus } = useUpdateDetailStatus();

  const handleUpdateClick = (detailCraft: IDetailCraft) => {
    updateDetailCraft(detailCraft, {
      onSuccess: () => {
        // updateDetailStatus({ status: "ASSEMBLY", detail });
      },
    });
  };

  console.log("curDetailCraftId", curDetailCraftId);

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
            {detailCraftsList?.map((detilCraftItem) => (
              <li
                key={detilCraftItem.id}
                className={cn(styles.stageItemWrap, {
                  [styles.selected]: detilCraftItem.id === curDetailCraftId,
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

                {detilCraftItem.id === curDetailCraftId && (
                  <Button
                    text={detailCraftStatuses[detilCraftItem.status].buttonText}
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
