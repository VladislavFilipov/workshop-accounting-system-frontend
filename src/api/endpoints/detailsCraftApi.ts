import { GET } from "@src/const/httpMethods";
import { IDetailCraft } from "@src/types/detailCraft";
import { IUser } from "@src/types/user";

import request from "../request";

const url = "/details/craft";
const detailsCraftApi = {
  getByToken: async (token: string) =>
    request<IDetailCraft>({
      method: GET,
      url: `${url}/token?data=${token}`,
    }),
  // editHabit: async (habit: IHabit) =>
  //   request<IHabit>({
  //     method: PUT,
  //     url: `${url}/${habit.id}`,
  //     data: habit
  //   })
  // .then((res) => {
  //   console.log("getAll", res);
  //   return res.filter((item) => item.id > 0);
  // })
};

export default detailsCraftApi;
