import { Router } from "express";
import {
  getAllproducts,
  getProductByID,
  deleteProduct,
  replaceProductByID,
  updateProductPrice,
  addProduct,
} from "../../controllers/product.controler.js";

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
router.get("/:id", getProductByID);

// =======================
// DELETE PRODUCT
// DELETE /api/products/:id
// =======================
router.delete("/:id", deleteProduct);

// =======================
// REPLACE PRODUCT (PUT)
// PUT /api/products/:id
// =======================
router.put("/:id", replaceProductByID);

// =======================
// UPDATE PRICE (PATCH)
// PATCH /api/products/:id/price
// =======================
router.patch("/:id", updateProductPrice);


//* POST /api/products
// =======================
router.post("/", addProduct);
export default router;
