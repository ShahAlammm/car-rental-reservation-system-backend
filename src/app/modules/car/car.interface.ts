import { Model } from 'mongoose';

export type TCar = {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: 'available' | 'unavailable';
  features: string[];
  pricePerHour: number;
  image: string;
  category: string;
  isDeleted: boolean;
};

export interface CarModel extends Model<TCar> {}
