const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  mileage: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  imageUrl: [{ type: String }],
});

module.exports = mongoose.model('Car', carSchema);
