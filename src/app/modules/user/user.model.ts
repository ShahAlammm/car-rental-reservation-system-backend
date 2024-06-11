import { Schema, model } from 'mongoose';
import { TUser, TUserName } from './user.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    max_length: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    max_length: [20, 'Name can not be more than 20 characters'],
  },
});

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: userNameSchema,
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