import { Request, Response } from 'express';
import Car from './car.model';
import { CarServices } from './car.service';

const cerateCar = async (req: Request, res: Response) => {
  const result = await CarServices.createCar(req.body);

  res.json({
    success: true,
    message: 'Car is created successfully !',
    data: result,
  });
};

export const CarControllers = {
  cerateCar,
};
