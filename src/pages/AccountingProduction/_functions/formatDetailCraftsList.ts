/*
  Function checks the order of detail crafts and returns permissions to update detail craft ststus and detail ststus.
*/
import { WAITING, WORKING } from "@src/const/statuses";
import { IDetailCraft } from "@src/types/detailCraft";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

export const formatDetailCraftsList = (detailCraftsList: IDetailCraft[]) => {
  const sortedList: IDetailCraft[] = sortArrayOfObjects(
    detailCraftsList,
    "stage_number",
    "number",
  );

  const curDetailCraft = sortedList.find(
    (detailCraft) =>
      detailCraft.status === WAITING || detailCraft.status === WORKING,
  );

  return {
    sortedList,
    curDetailCraftId: curDetailCraft?.id ?? undefined,
    canDetailFinish: !curDetailCraft,
  };
};
