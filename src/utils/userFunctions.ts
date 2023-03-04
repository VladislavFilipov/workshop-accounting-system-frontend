import { IUser } from "@src/types/user";

export const formatUserName = (
  user: IUser | undefined,
  isFull = true,
  customText = "Имя не указано",
): string =>
  user && user.last_name && user.first_name
    ? `${user.last_name} ${isFull ? user.first_name : user.first_name[0] + "."}`
    : customText;
