import { GET } from "@src/const/httpMethods";
import { IDetail } from "@src/types/detail";

import request from "../request";

const baseUrl = "/details";
const detailsApi = {
  getByToken: async (token: string) =>
    request<IDetail>({
      method: GET,
      url: `${baseUrl}/token?data=${token}`,
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

export default detailsApi;
