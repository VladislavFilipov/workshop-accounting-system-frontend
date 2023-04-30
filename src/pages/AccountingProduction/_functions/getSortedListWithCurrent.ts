import { INACTIVE, WAITING, WORKING } from "@src/const/statuses";
import { IDetailCraft } from "@src/types/detailCraft";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

/**
 * Function checks the order of detail crafts and returns permissions to update detail craft status.
 */
export const getSortedListWithCurrent = (
  detailCraftsList: IDetailCraft[],
): {
  sortedList: IDetailCraft[];
  curDetailCraftId: number | undefined;
} => {
  const sortedList: IDetailCraft[] = sortArrayOfObjects(
    detailCraftsList,
    "stage_number",
    "number",
  );

  const curDetailCraft = sortedList.find(
    (detailCraft) =>
      detailCraft.status === INACTIVE ||
      detailCraft.status === WAITING ||
      detailCraft.status === WORKING,
  );

  return {
    sortedList,
    curDetailCraftId: curDetailCraft?.id ?? undefined,
  };
};
