import { IUser } from "@src/types/user";

export const formatUserName = (
  { first_name, last_name }: IUser,
  isFull: boolean = true,
): string =>
  last_name && first_name
    ? `${last_name} ${isFull ? first_name : first_name[0] + "."}`
    : "Имя не указано";
