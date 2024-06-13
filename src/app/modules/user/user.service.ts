import { TUser } from './user.interface';
import User from './user.model';


const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  console.log(result)
  return result;
};

const updateUser = async (_id: string, payload: TUser) => {
  const result = await User.findByIdAndUpdate({ _id }, payload);
  return result;
};

export const UserServices = {
  createUser,
  updateUser,
};
