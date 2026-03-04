# 🛠️ Node.js E-Commerce API 


![Node.js](https://img.shields.io/badge/Node.js-v18-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-green)
![NPM](https://img.shields.io/badge/npm-v9-orange)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Concepts Learned](#concepts-learned)
- [Dependencies](#dependencies)
- [Author](#author)

---

## Project Overview

This project is a **RESTful API** built with **Node.js, Express, and MongoDB** for managing **Users, Products, and Categories**. It demonstrates **CRUD operations**, proper **error handling**, and **API design best practices**.

The API allows you to:

- Create, read, update, and delete **users**.
- Create, read, update, and delete **products**.
- Create and read **categories**.
- Update user passwords and product prices using **PATCH methods**.
- Handle errors like **duplicate entries**, **missing fields**, and **non-existent resources**.

---

## Concepts Learned

During this project, the following concepts and skills were practiced:

- **Express.js Routing** – Organizing routes and controllers for different resources.
- **Mongoose & MongoDB** – Schema design, models, and database operations.
- **CRUD Operations** – Implementing Create, Read, Update, and Delete functionalities.
- **Error Handling** – Using try/catch blocks, custom HTTP error classes, and middleware.
- **REST API Design** – Using proper HTTP methods (GET, POST, PUT, PATCH, DELETE).
- **JSON Request/Response** – Handling data exchange in JSON format.
- **Parameter Validation** – Checking for required fields and validating inputs.
- **Data Sanitization & Security** – Using `trim()`, `escape()`, and `normalizeEmail()` to clean input.
- **Validation Middleware** – Creating centralized middleware for handling validation errors (`validationResult`).
- **Dynamic Parameter Validation** – Validating route parameters like IDs (`:id`) and ensuring they are valid Mongo IDs.
- **PATCH & PUT Operations** – Understanding when to use partial updates vs full replacements.
- **Reusable Validators** – Creating modular validator functions for users, products, and categories.
- **Nested Routes & Relationships** – Planning embedded vs referenced documents in MongoDB (one-to-many, many-to-many).
- **Modular Project Structure** – Separating controllers, models, routes, and validators for scalability.
- **Postman Testing** – Testing API endpoints with variables, environments, and automated ID storage.

---

## Dependencies

The project uses the following NPM packages:

- **express** – Web framework for Node.js.
- **mongoose** – Object Data Modeling (ODM) library for MongoDB.
- **dotenv** – Loads environment variables from `.env` files.
- **express-validator** – Middleware for validating and sanitizing inputs.
- **nodemon** (dev dependency) – Automatically restarts the server during development.

---


- **Badges**: Node.js version, Express, MongoDB, npm، وStatus Active  
- **Table of Contents** 

## Author

**Abanoub Maqqar** – Full-Stack Developer & ITI Trainee  
[GitHub](https://github.com/abanoubmaqqar19) | [LinkedIn](https://www.linkedin.com/in/abanoub-maqqar-4b7980236/)
