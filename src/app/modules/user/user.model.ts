import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcryptjs from 'bcryptjs';


const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true },
);

userSchema.pre<TUser>('save', async function (next) {
  // if (!this.isModified('password')) {
  //   return next();
  // }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
) {
  return await bcryptjs.compare(candidatePassword, this.password);
};

const User = model<TUser>('User', userSchema);
export default User;
