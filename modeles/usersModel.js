// import { ROOTDIR } from "../utils/path.js";
// import path from "path";
// import fs from "fs/promises";

// const filePath = path.join(ROOTDIR, "data", "data.json");

// export default class User {
//   constructor(name, email, password = "") {
//     this.name = name;
//     this.email = email;
//     this.password = password;
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
//   // GET ALL USERS
//   // ===============================
//   static async getAllUsers() {
//     const db = await this._readDB();
//     return db.users;
//   }

//   // ===============================
//   // GET USER BY ID
//   // ===============================
//   static async getUserByID(id) {
//     const db = await this._readDB();
//     return db.users.find((u) => u.id === Number(id)) || null;
//   }

//   // ===============================
//   // ADD USER
//   // ===============================
//   static async addUser(userData) {
//     const db = await this._readDB();
//     const newId =
//       db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1;

//     const newUser = {
//       id: newId,
//       ...userData,
//     };

//     db.users.push(newUser);
//     await this._writeDB(db);

//     return newUser;
//   }

//   // ===============================
//   // UPDATE PASSWORD
//   // ===============================
//   static async updateUserPWD(id, newPassword) {
//     const db = await this._readDB();
//     const user = db.users.find((u) => u.id === Number(id));
//     if (!user) return null;

//     user.password = newPassword;
//     await this._writeDB(db);
//     return user;
//   }

//   // ===============================
//   // DELETE USER
//   // ===============================
//   static async deleteUser(id) {
//     const db = await this._readDB();
//     const index = db.users.findIndex((u) => u.id === Number(id));
//     if (index === -1) return false;

//     db.users.splice(index, 1);
//     await this._writeDB(db);
//     return true;
//   }
// }


//*work with mongoose instead of read local file
import mongoose from "mongoose";


// build schema 
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email required"],
    validate: {
      validator: function (value) {
        return /^\S+@\S+\.\S+$/.test(value);
      },
      message: "Invalid email format",
    },
  },
 password: {
  type: String,
  required: [true, "password required"],
},
});


// simulat User class 

export default mongoose.model("User", userSchema);