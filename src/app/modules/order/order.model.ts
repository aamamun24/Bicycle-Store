import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      String,
      required: [true, 'Email is required'],
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', orderSchema);
