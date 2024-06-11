import { Schema, model } from 'mongoose';
import { CarModel, TCar } from './car.interface';

const carSchema = new Schema<TCar, CarModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  features: {
    type: String,
    enum: ['Bluetooth', 'AC', 'Sunroof'],
    required: true,
  },
  pricePerHour: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});


carSchema.statics.isCarExists = async function (id: string): Promise<TCar | null> {
    return this.findById(id).where({ isDeleted: false }).exec();
  };
  
// Create and export the Car model
const Car = model<TCar, CarModel>('Car', carSchema);

export default Car;
