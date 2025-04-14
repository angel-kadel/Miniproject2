import Product from '../models/productModel.js';

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, inStock, quantity } = req.body;
    
    const product = await Product.create({
      name,
      description,
      price,
      category,
      inStock,
      quantity
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};