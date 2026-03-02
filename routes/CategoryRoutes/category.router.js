import { Router } from "express";
import {
  getAllCategories,
  addCategory,
} from "../../controllers/categories.controler.js";

const router = Router();

// GET all categories
router.get("/", getAllCategories);

// ADD new category
router.post("/", addCategory);

export default router;
