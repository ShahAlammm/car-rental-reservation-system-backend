import { Model, Types } from 'mongoose';

export type TBooking = {
  _id: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  dropOffLocation: string;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: string;
  endTime: string;
  totalCost: number;
  isBooked: 'unconfirmed' | 'confirmed';
};

// Static methods for the Booking model
export interface BookingModel extends Model<TBooking> {}
