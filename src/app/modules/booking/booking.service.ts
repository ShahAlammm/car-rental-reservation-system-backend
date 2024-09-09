import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TBooking } from './booking.interface';
import Booking from './booking.model';


export const createBooking = async (payload: TBooking): Promise<TBooking> => {
  const newBooking = await Booking.create(payload);

  return newBooking;
};

const getAllBookings = async (): Promise<TBooking[]> => {
  const bookings = await Booking.find().populate('user').populate('car').exec();
  return bookings;
};

const getSingleBooking = async (id: string) => {
  const result = await Booking.findById(id);
  return result;
};

const updateBooking = async (id: string, payload: Partial<TBooking>) => {

  const { ...remainingBookingData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingBookingData,
  };

  const result = await Booking.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');
  }

  return result;
};

const deleteBooking = async (id: string) => {


  try {


    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete car');
    }

  } catch (err) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete booking',
    );
  }
};


export const BookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking
};
