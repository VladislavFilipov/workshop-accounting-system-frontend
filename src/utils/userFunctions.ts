import { IUser } from "@src/types/user";

export const formatUserName = ({ lastName, name, middleName }: IUser) =>
  lastName && name
    ? `${lastName} ${name[0]}.${middleName ? middleName[0] + "." : ""}`
    : "Имя не указано";
