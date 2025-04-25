import productServices from './productService.js';
import Product from '../models/productModel.js';

jest.mock('../models/productModel.js');

describe('Product Service', () => {
  let mockProductInstance;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    mockProductInstance = { save: jest.fn() };
    Product.mockImplementation((mockData) => {
      const mockProduct = { ...mockProductInstance, ...mockData };
      return mockProduct;
    });
  });
  
  test('Should create a product successfully', async () => {
    const mockProductData = {
      name: 'Test Product',
      description: 'Product to be used in unit tests',
      price: 1000.00,
      colors: ['white'],
      collection: 'Test Collection',
    };
    const expectedSavedProduct = {
      _id: '0',
      createdAt: new Date('2025-01-01T10:00:00.000Z'),
      updatedAt: new Date('2025-01-01T10:00:00.000Z'),
      __v: 0,
      ...mockProductData,
      photos: [],
      available: true
    };
    
    mockProductInstance.save.mockResolvedValue(expectedSavedProduct);
    
    const createdProduct = await productServices.createProduct(mockProductData);
    
    expect(Product).toHaveBeenCalledTimes(1);
    expect(Product).toHaveBeenCalledWith(mockProductData);
    expect(mockProductInstance.save).toHaveBeenCalledTimes(1);
    expect(createdProduct).toEqual(expectedSavedProduct)
  });
});