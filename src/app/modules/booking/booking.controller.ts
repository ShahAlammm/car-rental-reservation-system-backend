import { Request, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';

const cerateBooking = async (req: Request, res: Response) => {
  const result = await BookingServices.createBooking(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car created successfully',
    data: result,
  });
};

export const BookingControllers = {
  cerateBooking,
};
