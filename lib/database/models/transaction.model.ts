import { Schema, model, models } from 'mongoose';
import { unique } from 'next/dist/build/utils';

export interface ITransaction {
  createdAt?: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: Schema.Types.ObjectId;
}

const TransactionSchema = new Schema<ITransaction>({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, require: true, unique: true },
  amount: { type: Number, require: true },
  plan: { type: String },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Transaction =
  models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
