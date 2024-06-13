import { USER_Role } from "./user.constants";

export type TUser = {
  id: string;
  name: string;
  email: string;
  needsPasswordChange: boolean;
  role: keyof typeof USER_Role;
  password: string;
  phone: string;
  address: string;
};
