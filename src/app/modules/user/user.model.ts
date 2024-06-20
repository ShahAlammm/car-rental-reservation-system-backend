import { Schema, Types, model } from 'mongoose';
import { TUser } from './user.interface';
import bcryptjs from 'bcryptjs';
import config from '../../config';


interface UserDocument {
  _id: Types.ObjectId;
  password: string;
}


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
      select: 0,
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

userSchema.pre('save', async function (next) {
  const user = this as UserDocument;

  user.password = await bcryptjs.hash(user.password, Number(config.salt_round));
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
