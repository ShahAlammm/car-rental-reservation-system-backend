import { Schema, model } from 'mongoose';
import { BookingModel, TBooking } from './booking.interface';
import Car from '../car/car.model';
import { User } from '../user/user.model';

const bookingSchema = new Schema<TBooking, BookingModel>(
  {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    dropOffLocation: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, default: null },
    totalCost: { type: Number, default: 0 },
    isBooked: {
      type: String,
      enum: ['unconfirmed', 'confirmed'],
      default: 'unconfirmed',
    },
  },
  {
    timestamps: true,
  },
);

// Middleware to validate carId and userId before saving
bookingSchema.pre<TBooking>('save', async function (next) {
  const booking = this as TBooking;

  // Validate carId
  const carExists = await Car.findById(booking.car);
  if (!carExists) {
    return next(new Error('Invalid carId: Car does not exist'));
  }

  // Validate userId
  const userExists = await User.findById(booking.user);
  if (!userExists) {
    return next(new Error('Invalid userId: User does not exist'));
  }

  next();
});

// Create and export the Booking model
const Booking = model<TBooking, BookingModel>('Booking', bookingSchema);
export default Booking;
