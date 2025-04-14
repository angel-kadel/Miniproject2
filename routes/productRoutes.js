import express from 'express';
import { createProduct } from '../controllers/productController.js';

const router = express.Router();

// Create a new product
router.post('/', createProduct);

export default router;