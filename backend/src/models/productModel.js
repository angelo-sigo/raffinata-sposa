import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  colors: {
    type: [String],
    default: []
  },
  collection: {
    type: String,
    trim: true
  },
  photos: {
    type: [String],
    default: []
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});
const Product = mongoose.model('Product', productSchema);

export default Product;