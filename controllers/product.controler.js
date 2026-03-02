import Product from "../modeles/productsModel.js";

// ===============================
// GET ALL
// ===============================
export const getAllproducts = async (req, res) => {
  try {
    const products = await Product.getAllproducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// GET BY ID
// ===============================
export const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.getProductByID(id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// REPLACE (PUT)
// ===============================
export const replaceProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;

    if (!name || !price || !categoryId)
      return res.status(400).json({ message: "Missing required fields" });

    const existing = await Product.getProductByID(id);

    if (!existing)
      return res.status(404).json({ message: "Product not found" });

    await Product.deleteProduct(id);
    const newProduct = await Product.addProduct({
      name,
      price,
      categoryId,
    });

    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// ===============================
// UPDATE PRICE (PATCH)
// ===============================
export const updateProductPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (!price) {
      return res.status(400).json({ message: "Price is required" });
    }

    const updatedProduct = await Product.updateProductPrice(id, price);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
    

// ===============================
// DELETE
// ===============================
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Product.deleteProduct(id);

    if (!deleted) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
