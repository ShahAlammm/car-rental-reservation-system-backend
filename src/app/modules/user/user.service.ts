import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

//Create User
const createAdmin = async (payload: TUser) => {
  const result = await User.create(payload);
  if (!result) {
    throw new AppError(httpStatus.FORBIDDEN, 'User not Created');
  }
  return result;
};

// Get single
const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  return result;
};

//update
const updateUser = async (_id: string, payload: Partial<TUser>) => {
  const { ...remainingUserData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingUserData,
  };

  const result = await User.findByIdAndUpdate(_id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  return result;
};

export const UserServices = {
  createAdmin,
  getSingleUser,
  updateUser,
};
