import { TCar } from './car.interface';
import Car from './car.model';

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

export const CarServices = {
  createCar,
  getAllCar,
  getSingleCar,
};
