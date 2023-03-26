/*
  Function checks the order of detail crafts and returns permissions to update detail craft ststus and detail ststus.
*/
import { IDetailCraft } from "@src/types/detailCraft";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

export const formatDetailCraftsList = (
  detailCraftsList: IDetailCraft[],
  scannedDetailCraft: IDetailCraft,
) => {
  const sortedList: IDetailCraft[] = sortArrayOfObjects(
    detailCraftsList,
    "stage_number",
    "number",
  );

  const currentIndex = sortedList.findIndex(
    (detailCraft) =>
      detailCraft.status === "WAITING" || detailCraft.status === "WORKING",
  );

  const workingDetailCraft: null | IDetailCraft =
    currentIndex !== -1 ? sortedList[currentIndex] : null;

  const canUpdate: boolean = workingDetailCraft
    ? workingDetailCraft.id === scannedDetailCraft.id
    : false;

  return { sortedList, canUpdate, canDetailFinish: currentIndex === -1 };
};
