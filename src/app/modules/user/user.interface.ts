import { USER_Role } from './user.constants';

export type TUser = {
  id: string;
  name: string;
  email: string;
  role: keyof typeof USER_Role;
  password: string;
  phone: string;
  address: string;
};
