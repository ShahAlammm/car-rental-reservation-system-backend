import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: [true, 'Present address is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
