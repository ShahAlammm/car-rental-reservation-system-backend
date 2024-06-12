export type TUser = {
  id: string;
  name: string;
  email: string;
  needsPasswordChange: boolean;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
};
