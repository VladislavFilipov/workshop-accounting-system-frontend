import { useQuery } from "@tanstack/react-query";

import Api from "@src/api";
import { MACHINES_KEY } from "@src/const/queryKeys";
import { IMachine } from "@src/types/machine";
import { sortArrayOfObjects } from "@src/utils/sort/sortArrayOfObjects";

const useMachines = (): [IMachine[] | undefined, boolean, unknown] => {
  const {
    data: machines,
    isLoading,
    error,
  } = useQuery([MACHINES_KEY], async () => {
    const machines = await Api.machines.getAll();
    return sortArrayOfObjects(machines, "id", "number");
  });
  return [machines, isLoading, error];
};

export default useMachines;
