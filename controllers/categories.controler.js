// import Category from "../modeles/categoriesModel.js";

// // ===============================
// // GET ALL CATEGORIES
// // GET /api/categories
// // ===============================
// export const getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.getAllCategories();
//     return res.status(200).json(categories);
//   } catch (err) {
//     return res.status(500).json({ message: "Server Error" });
//   }
// };

// // ===============================
// // ADD NEW CATEGORY
// // POST /api/categories
// // ===============================
// export const addCategory = async (req, res) => {
//   try {
//     const { name } = req.body;

//     if (!name)
//       return res.status(400).json({ message: "Category name is required" });

//     const newCategory = await Category.addCategory({ name });

//     return res.status(201).json(newCategory);
//   } catch (err) {
//     return res.status(500).json({ message: "Server Error" });
//   }
// };

import Category from "../modeles/categoriesModel.js"; // Adjust path if needed
import HTTPError from "../utils/errorHttp.js";

// ===============================
// GET ALL CATEGORIES
// ===============================
export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find(); // Fetch all categories
    return res.status(200).json({
      message: "Categories retrieved successfully",
      count: categories.length,
      categories,
    });
  } catch (err) {
    next(err); // Forward error to error-handling middleware
  }
};

// ===============================
// ADD NEW CATEGORY
// ===============================
export const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return next(new HTTPError(400, "Category name is required"));
    }

    // Create new category
    const category = await Category.create({ name });

    return res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (err) {
    next(err); // Handle duplicate key or validation errors
  }
};