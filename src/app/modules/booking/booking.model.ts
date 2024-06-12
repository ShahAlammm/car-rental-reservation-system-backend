import { Schema, model } from 'mongoose';
import { BookingModel, TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking, BookingModel>(
  {
    date: { type: Date, required: true, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
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

// Static method to calculate total cost
// bookingSchema.statics.calculateTotalCost = function (
//   booking: TBooking,
// ): number {
//   const startHour = parseInt(booking.startTime.split(':')[0], 10);
//   const endHour = parseInt(booking.endTime.split(':')[0], 10);
//   const hoursBooked = endHour - startHour;

//   // Find the car to get the pricePerHour
//   return this.model('Car')
//     .findById(booking.car)
//     .then((car) => {
//       if (car) {
//         booking.totalCost = hoursBooked * parseFloat(car.pricePerHour);
//       }
//       return booking.totalCost;
//     });
// };

// // Pre-save hook to calculate total cost before saving
// bookingSchema.pre('save', async function (next) {
//   const booking = this as TBooking;
//   booking.totalCost = await bookingSchema.statics.calculateTotalCost(booking);
//   next();
// });

// Create and export the Booking model
const Booking = model<TBooking, BookingModel>('Booking', bookingSchema);
export default Booking;
