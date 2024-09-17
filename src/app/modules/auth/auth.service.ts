/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../config';
import { USER_Role } from '../user/user.constants';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';
import { isPasswordMatched } from './auth.utils';




//sign up
const register = async (payload: TUser): Promise<any> => {

  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error('User already exists');
  }

  //set user role
  payload.role = USER_Role.user;

  //create user
  const newUser = await User.create(payload);

  return newUser;
};


//sign in
const login = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');

  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password,
  );

  if (!passwordMatch) {
    throw new Error('Password not matched');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    },
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
 register,
 login,
};
