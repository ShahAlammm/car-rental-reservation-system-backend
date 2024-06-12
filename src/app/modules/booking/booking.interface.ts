import { Model, Types } from "mongoose";

export type TBooking = {
    date: Date;
    user: Types.ObjectId;
    car: Types.ObjectId;
    startTime: string;
    endTime: string;
    totalCost: string;
    isBooked: 'unconfirmed' | 'confirmed';
  };

  // Static methods for the Booking model
  export interface BookingModel extends Model<TBooking> {
    
  }