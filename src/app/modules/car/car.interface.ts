import { Model } from 'mongoose';

export type TCar = {
  id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: 'available' | 'unavailable';
  features: 'Bluetooth' | 'AC' | 'Sunroof';
  pricePerHour: string;
  isDeleted: boolean;
};



export interface CarModel extends Model<TCar> {
  // eslint-disable-next-line no-unused-vars
  isCarExists(id: string): Promise<TCar | null>;
}

