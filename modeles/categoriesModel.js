// import { ROOTDIR } from "../utils/path.js";
// import path from "path";
// import fs from "fs/promises";

// const filePath = path.join(ROOTDIR, "data", "data.json");

// export default class Category {
//   constructor(name) {
//     this.name = name;
//   }

//   // Helper: read database
//   static async _readDB() {
//     const data = await fs.readFile(filePath, "utf-8");
//     return JSON.parse(data);
//   }

//   // Helper: write database
//   static async _writeDB(data) {
//     await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
//   }

//   // ===============================
//   // GET ALL CATEGORIES
//   // ===============================
//   static async getAllCategories() {
//     const db = await this._readDB();
//     return db.categories;
//   }

//   // ===============================
//   // ADD CATEGORY
//   // ===============================
//   static async addCategory(categoryData) {
//     const db = await this._readDB();

//     // Generate new ID
//     const newId =
//       db.categories.length > 0
//  db.categories[db.categories.length - 1].id + 1
//         : 1;

//     const newCategory = {
//       id: newId,
//       ...categoryData,
//     };

//     db.categories.push(newCategory);
//     await this._writeDB(db);

//     return newCategory;
//   }
// }

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", categorySchema);