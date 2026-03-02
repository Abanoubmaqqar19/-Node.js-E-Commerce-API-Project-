import { ROOTDIR } from "../utils/path.js";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(ROOTDIR, "data", "data.json");

export default class Product {
  constructor(name, price, categoryId) {
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
  }

  //Helper: read database
  static async _readDB() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  }

  //Helper: write database
  static async _writeDB(data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  }

  // ===============================
  // GET ALL
  // ===============================
  static async getAllproducts() {
    const db = await this._readDB();
    return db.products;
  }

  // ===============================
  // GET BY ID
  // ===============================
  static async getProductByID(id) {
    const db = await this._readDB();
    return db.products.find((p) => p.id === Number(id)) || null;
  }

  // ===============================
  // ADD PRODUCT
  // ===============================
  static async addProduct(productData) {
    const db = await this._readDB();

    const newId =
      db.products.length > 0 ? db.products[db.products.length - 1].id + 1 : 1;

    const newProduct = {
      id: newId,
      ...productData,
    };

    db.products.push(newProduct);
    await this._writeDB(db);

    return newProduct;
  }

  // ===============================
  // UPDATE PRICE (PATCH)
  // ===============================
  static async updateProductPrice(id, newPrice) {
    const db = await this._readDB();

    const product = db.products.find((p) => p.id === Number(id));
    if (!product) return null;

    product.price = newPrice;

    await this._writeDB(db);
    return product;
  }

  // ===============================
  // DELETE
  // ===============================
  static async deleteProduct(id) {
    const db = await this._readDB();

    const index = db.products.findIndex((p) => p.id === Number(id));
    if (index === -1) return false;

    db.products.splice(index, 1);

    await this._writeDB(db);
    return true;
  }
}
