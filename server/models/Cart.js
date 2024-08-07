const mongoose = require('mongoose');

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    quantity: {
      type: Number,
      required: true
    },
  },
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
  default:
    Date.now
  },
  updatedAt: {
    type: Date,
  default:
    Date.now
  },
});

// Exporting cart schema
module.exports = mongoose.model('Cart', cartSchema);