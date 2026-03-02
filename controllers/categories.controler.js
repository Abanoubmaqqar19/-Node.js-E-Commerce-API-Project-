import Category from "../modeles/categoriesModel.js";

// ===============================
// GET ALL CATEGORIES
// GET /api/categories
// ===============================
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAllCategories();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// ADD NEW CATEGORY
// POST /api/categories
// ===============================
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ message: "Category name is required" });

    const newCategory = await Category.addCategory({ name });

    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
