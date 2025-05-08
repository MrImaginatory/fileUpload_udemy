import { getAllProd, createProduct } from "../controllers/product.controller.js";
import { Router } from "express";

const prodRouter = Router();

prodRouter.route('/create').post(createProduct);
prodRouter.route('/product').get(getAllProd);

export default prodRouter;