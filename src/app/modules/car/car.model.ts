import { Schema, model } from 'mongoose';
import { CarModel, TCar } from './car.interface';

const carSchema = new Schema<TCar, CarModel>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    isElectric: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
    features: {
      type: [String],
      required: true,
    },
    pricePerHour: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// carSchema.statics.isCarExists = async function (id: string): Promise<TCar | null> {
//     return this.findById(id).where({ isDeleted: false }).exec();
//   };

// Create and export the Car model
const Car = model<TCar, CarModel>('Car', carSchema);

export default Car;
