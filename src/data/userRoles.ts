import { TUserRole } from "@src/types/user";

interface IRoleBody {
  name: TUserRole;
  ruName: string;
}

const userRoles: Record<TUserRole, IRoleBody> = {
  ADMIN: { name: "ADMIN", ruName: "Администратор" },
  MODERATOR: { name: "MODERATOR", ruName: "Модератор" },
  USER: { name: "USER", ruName: "Сотрудник" },
} as const;

export default userRoles;
