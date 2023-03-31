import { IDetailCraft } from "@src/types/detailCraft";
import { IUser } from "@src/types/user";

export const usersList: IUser[] = [
  {
    id: 5,
    username: "ivanoff",
    password: "some@pass12",
    note: "some info about user",
    enterprise_id: 1,
    status: "NOT_ACTIVE",
    role: "USER",
    first_name: "Ivan",
    last_name: "Ivanov",
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
    username: "petroff",
    password: "some@pass12",
    note: "some info about user",
    enterprise_id: 12,
    status: "NOT_ACTIVE",
    role: "ADMIN",
    first_name: "Peter",
    last_name: "Petrov",
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

export const detailCraft: IDetailCraft = {
  id: 22,
  stage_number: 2,
  status: "WAITING",
  stage_id: {
    name: "Распил",
    description: "Описание этапа распил",
    id: 1,
    enterprise_id: 1,
  },
  details_id: {
    name: "Пуансонодержатель",
    description: "Какое-либо описание детали",
    id: 14,
    enterprise_id: 1,
    tech_number: "Ат-012.008",
    amount: 2,
    status: "WAITING",
  },
  location_id: {
    id: 1,
    address: "Лиговский 52",
    description: null,
    location_name: "Лиговский",
    mail_index: "194100",
  },
  create_date: "2023-03-23T05:40:12.010172",
  ending_date: null,
};

export const detailCraftList: IDetailCraft[] = [
  {
    id: 22,
    stage_number: 2,
    status: "WAITING",
    stage_id: {
      name: "Распил",
      description: "Описание этапа распил",
      id: 1,
      enterprise_id: 1,
    },
    details_id: {
      name: "Пуансонодержатель",
      description: "Какое-либо описание детали",
      id: 14,
      enterprise_id: 1,
      tech_number: "Ат-012.008",
      amount: 2,
      status: "WAITING",
    },
    location_id: {
      id: 1,
      address: "Лиговский 52",
      description: null,
      location_name: "Лиговский",
      mail_index: "194100",
    },
    create_date: "2023-03-23T05:40:12.010172",
    ending_date: null,
  },
  {
    id: 23,
    stage_number: 1,
    status: "WAITING",
    stage_id: {
      name: "Габариты",
      description: "Описание этапа габариты",
      id: 2,
      enterprise_id: 2,
    },
    details_id: {
      name: "Пуансонодержатель",
      description: "Какое-либо описание детали",
      id: 14,
      enterprise_id: 1,
      tech_number: "Ат-012.008",
      amount: 2,
      status: "WAITING",
    },
    location_id: {
      id: 1,
      address: "Лиговский 52",
      description: null,
      location_name: "Лиговский",
      mail_index: "194100",
    },
    create_date: "2023-03-23T05:41:25.724314",
    ending_date: null,
  },
  {
    id: 24,
    stage_number: 3,
    status: "WAITING",
    stage_id: {
      name: "Габариты",
      description: "Описание этапа габариты",
      id: 2,
      enterprise_id: 2,
    },
    details_id: {
      name: "Пуансонодержатель",
      description: "Какое-либо описание детали",
      id: 14,
      enterprise_id: 1,
      tech_number: "Ат-012.008",
      amount: 2,
      status: "WAITING",
    },
    location_id: {
      id: 1,
      address: "Лиговский 52",
      description: null,
      location_name: "Лиговский",
      mail_index: "194100",
    },
    create_date: "2023-03-23T05:41:46.447398",
    ending_date: null,
  },
];
