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

export const CarControllers = {
  cerateCar,
};
