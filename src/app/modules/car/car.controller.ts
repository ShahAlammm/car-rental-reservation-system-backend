import { Request, Response } from 'express';
import { CarServices } from './car.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const cerateCar = async (req: Request, res: Response) => {
  const result = await CarServices.createCar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
};

const getAllCar = async (req: Request, res: Response) => {
  const result = await CarServices.getAllCar();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cars retrieved successfully',
    data: result,
  });
};

const getSingleCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CarServices.getSingleCar(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A Car retrieved successfully',
    data: result,
  });
};

export const CarControllers = {
  cerateCar,
  getAllCar,
  getSingleCar,
};
