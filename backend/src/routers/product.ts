import express from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { getAllProducts, createProduct } from "../controllers/products";

const router = express.Router();

const productValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(2).max(30).required(),
    image: Joi.object({
      fileName: Joi.string().required(),
      originalName: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
    description: Joi.string().optional(),
    price: Joi.number().positive().optional(),
  }),
});

router.get("/product", getAllProducts);
router.post("/product", productValidation, createProduct);

export default router;
