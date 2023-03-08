import { IUser } from "@src/types/user";

export const usersList: IUser[] = [
  {
    id: 5,
    username: "Device",
    password: "some@pass12",
    note: "some info about user",
    enterprise_id: 1,
    status: "NOT_ACTIVE",
    role: "USER",
    first_name: "Pavel",
    last_name: "Konstantinov",
    token: "ecdf3ee1-9e21-453e-a6af-5ee33b0dbd22",
    create_date: "2023-02-17T15:11:14.423",
    jobs_id: [
      {
        id: 2,
        name: "Шлифовщик",
      },
    ],
    location_id: null,
  },
  {
    id: 6,
    username: "Svartberg",
    password: "some@pass12",
    note: "some info about user",
    enterprise_id: 12,
    status: "NOT_ACTIVE",
    role: "ADMIN",
    first_name: "Andrey",
    last_name: "Konstantinov",
    token: "3c71aa3d-0bfe-463b-b41a-cb9414a07239",
    create_date: "2023-02-17T15:11:51.859",
    jobs_id: [
      {
        id: 4,
        name: "Фасовщик",
      },
      {
        id: 3,
        name: "Штамповщик",
      },
    ],
    location_id: null,
  },
];
