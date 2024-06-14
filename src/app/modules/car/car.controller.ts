import { Request, Response } from 'express';
import { CarServices } from './car.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../errors/AppError';

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
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Cars API not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cars retrieved successfully',
    data: result,
  });
};

const getSingleCar = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CarServices.getSingleCar(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Car API not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A Car retrieved successfully',
    data: result,
  });
});

const updateCar = catchAsync(async (req: Request, res: Response) => {
  const { carId } = req.params;
  const result = await CarServices.updateCar(carId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car is updated successfully',
    data: result,
  });
});

const deleteCar = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CarServices.deleteCar(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car Deleted successfully',
    data: result,
  });
});

export const CarControllers = {
  cerateCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
