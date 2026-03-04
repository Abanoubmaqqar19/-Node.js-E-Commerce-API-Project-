import { Router } from "express";
import {
  getAllCategories,
  addCategory,
} from "../../controllers/categories.controler.js";


import { createCategoryValidator } from "../../validation/categoriseValidatorMW.js"
import validationResult from "../../validation/validationResult.js";

const router = Router();

// GET all categories
router.get("/", getAllCategories);

// ADD new category
router.post("/", createCategoryValidator, validationResult, addCategory);

export default router;
