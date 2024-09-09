import mongoose from 'mongoose';
import { TCar } from './car.interface';
import Car from './car.model';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';


const createCar = async (payload: TCar) => {
  const result = await Car.create(payload);
  return result;
};

const getAllCar = async () => {
  const result = await Car.find(); //populate
  return result;
};

const getSingleCar = async (id: string) => {
  const result = await Car.findById(id);
  return result;
};

const updateCar = async (id: string, payload: Partial<TCar>) => {
  const { ...remainingCarData } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingCarData,
  };

  const result = await Car.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found');
  }

  return result;
};

const deleteCar = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedCar = await Car.findByIdAndDelete(id, { session });

    if (!deletedCar) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete car');
    }

    // const deletedUser = await User.findOneAndDelete({ carId: id }, { session });

    // if (!deletedUser) {
    //   throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    // }

    await session.commitTransaction();
    session.endSession();

    return deletedCar;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete car',
    );
  }
};

export const CarServices = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
