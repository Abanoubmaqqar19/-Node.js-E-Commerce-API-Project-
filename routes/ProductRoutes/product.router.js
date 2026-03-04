import { Router } from "express";
import {
  getAllproducts,
  getProductByID,
  deleteProduct,
  replaceProductByID,
  updateProductPrice,
  addProduct,
} from "../../controllers/product.controler.js";

import { createProductValidator,
  replaceProductValidator,
  updateProductPriceValidator,
  idParamValidator,} from "../../validation/productValidatorMW.js"
import validationResult from "../../validation/validationResult.js";

const router = Router();

// =======================
// GET ALL PRODUCTS
// GET /api/products
// =======================
router.get("/", getAllproducts);

// =======================
// GET PRODUCT BY ID
// GET /api/products/:id
// =======================
router.get("/:id",idParamValidator,validationResult, getProductByID);

// =======================
// DELETE PRODUCT
// DELETE /api/products/:id
// =======================
router.delete("/:id",idParamValidator,validationResult, deleteProduct);

// =======================
// REPLACE PRODUCT (PUT)
// PUT /api/products/:id
// =======================
router.put("/:id", replaceProductValidator,validationResult, replaceProductByID);

// =======================
// UPDATE PRICE (PATCH)
// PATCH /api/products/:id/price
// =======================
router.patch("/:id",updateProductPriceValidator, validationResult, updateProductPrice);


//* POST /api/products
// =======================
router.post("/", createProductValidator,validationResult, addProduct);
export default router;
