import { Request, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';
import AppError from '../../errors/AppError';

const cerateBooking = async (req: Request, res: Response) => {
  const result = await BookingServices.createBooking(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
};

const getAllBooking = async (req: Request, res: Response) => {
  const result = await BookingServices.getAllBookings();
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

export const BookingControllers = {
  cerateBooking,
  getAllBooking,
};
