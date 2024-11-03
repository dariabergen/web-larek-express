import express from 'express';
import { createOrderValidator } from '../middleware/validations';
import createOrder from '../controllers/orders';
const router = express.Router();
router.post('/', createOrderValidator, createOrder);
export default router;