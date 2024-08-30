import { Model } from 'mongoose';
import { USER_Role } from './user.constants';

export type TUser = {
  name: string;
  email: string;
  role: keyof typeof USER_Role;
  password: string;
  phone: string;
};
export interface UserModel extends Model<TUser> {}