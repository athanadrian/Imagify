import { Schema, model, models } from 'mongoose';
import { unique } from 'next/dist/build/utils';

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo: string;
  planId?: number;
  creditBalance?: number;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, require: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model('User', UserSchema);

export default User;
