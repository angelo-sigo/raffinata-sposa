import Product from '../models/productModel.js';

const productServices = {
  async createProduct(productData) {
    try {
      const product = new Product(productData);
      const savedProduct = await product.save();
      return savedProduct;
    } catch (error) {
      console.error('ERROR: Couldn\'t create the document in database', error);
      throw error
    }
  }
}

export default productServices