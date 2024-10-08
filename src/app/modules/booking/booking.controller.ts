import { Request, Response } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookingServices } from './booking.service';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';

const cerateBooking = async (req: Request, res: Response) => {
  const result = await BookingServices.createBooking(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successfully',
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
    message: 'My Bookings retrieved successfully',
    data: result,
  });
};

const getSingleBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  const result = await BookingServices.getSingleBooking(bookingId);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Cars API not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: result,
  });
};

const updateBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  const result = await BookingServices.updateBooking(bookingId, req.body);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking API not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking update successfully',
    data: result,
  });
};

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const { bookingId } = req.params;
  const result = await BookingServices.deleteBooking(bookingId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Deleted successfully',
    data: result,
  });
});

export const BookingControllers = {
  cerateBooking,
  getAllBooking,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
