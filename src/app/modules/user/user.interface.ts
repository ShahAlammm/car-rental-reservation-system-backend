

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUser = {
  id: string;
  name: TUserName;
  email: string;
  needsPasswordChange: boolean;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
};
