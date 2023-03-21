import { TUserRole } from "@src/types/user";

const userRoles: {
  [key in TUserRole]: { name: TUserRole; ruName: string };
} = {
  ADMIN: { name: "ADMIN", ruName: "Администратор" },
  MODERATOR: { name: "MODERATOR", ruName: "Модератор" },
  USER: { name: "USER", ruName: "Сотрудник" },
} as const;

export default userRoles;
