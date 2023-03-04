import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IUser } from "@src/types/user";

const url = "/users";
const users = {
  getAll: async () =>
    request<IUser[]>({
      method: GET,
      url: `${url}/`,
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

export default users;
