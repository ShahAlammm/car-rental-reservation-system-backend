import { Schema, model } from 'mongoose';
import { BookingModel, TBooking } from './booking.interface';
import Car from '../car/car.model';

const bookingSchema = new Schema<TBooking, BookingModel>(
  {
    _id: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    dropOffLocation: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car' },
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

bookingSchema.pre<TBooking>('save', async function (next) {
  if (this._id) {
    const car = await Car.findById(this._id);
    if (car) {
      this.car = car._id;
    } else {
      throw new Error('Invalid carId');
    }
  }
  next();
});


// Create and export the Booking model
const Booking = model<TBooking, BookingModel>('Booking', bookingSchema);
export default Booking;
