import Product from "../modeles/productsModel.js";
import HTTPError from "../utils/errorHttp.js";

// ===============================
// GET ALL PRODUCTS
// ===============================
export const getAllproducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (err) {
    next(err);
  }
};

// ===============================
// GET PRODUCT BY ID
// ===============================
export const getProductByID = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return next(new HTTPError(404, "Product not found"));
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (err) {
    next(err);
  }
};

// ===============================
// DELETE PRODUCT
// ===============================
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return next(new HTTPError(404, "Product not found"));
    }

    await product.deleteOne();

    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

// ===============================
// REPLACE PRODUCT (PUT)
// ===============================
export const replaceProductByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;

    if (!name || !price || !categoryId) {
      return next(new HTTPError(400, "All fields are required"));
    }

    const product = await Product.findById(id);

    if (!product) {
      return next(new HTTPError(404, "Product not found"));
    }

    product.name = name;
    product.price = price;
    product.categoryId = categoryId;

    await product.save();

    return res.status(200).json({
      message: "Product replaced successfully",
      product,
    });
  } catch (err) {
    next(err);
  }
};

// ===============================
// UPDATE PRICE (PATCH)
// ===============================
export const updateProductPrice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (!price) {
      return next(new HTTPError(400, "Price is required"));
    }

    const product = await Product.findById(id);

    if (!product) {
      return next(new HTTPError(404, "Product not found"));
    }

    product.price = price;

    await product.save();

    return res.status(200).json({
      message: "Price updated successfully",
      product,
    });
  } catch (err) {
    next(err);
  }
};

// ****************/
//! Add product
//*************** */


export const addProduct = async (req, res, next) => {
  try {
    const { name, price, categoryId } = req.body;

    // Validation basic check
    if (!name || !price || !categoryId) {
      return next(new HTTPError(400, "Missing required fields"));
    }

    const product = await Product.create({
      name,
      price,
      categoryId,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    next(err); // go to global error handler
  }
};