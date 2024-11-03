import express from 'express';
import { getAllProducts,createProduct } from '../controllers/products';
const router = express.Router();
router.get('/product', getAllProducts);
router.post('/product', createProduct);
export default router;