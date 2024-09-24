import mongoose, { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true  // Optional: Enforce that _id is required
  },
  total_price_set: { 
    shop_money: { 
      amount: { 
        type: String,
        required: true  // Optional: Enforce that amount is required
      },
      currency_code: { 
        type: String,
        required: true  // Optional: Enforce that currency_code is required
      }
    },
    presentment_money: { 
      amount: { 
        type: String,
        required: true  // Optional: Enforce that amount is required
      },
      currency_code: { 
        type: String,
        required: true  // Optional: Enforce that currency_code is required
      }
    }
  }
});

// Create and export the model
const Order = model('shopifyOrders', orderSchema);
export default Order;
