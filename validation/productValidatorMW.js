import { body, param } from "express-validator";


export const idParamValidator = [
  param("id")
    .notEmpty()
    .withMessage("Missing ID parameter")
    .isMongoId()
    .withMessage("Invalid Mongo ID format"),
];

// =======================
// CREATE PRODUCT (POST /)
// =======================
export const createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Description max 200 characters"),
];

// =======================
// REPLACE PRODUCT (PUT /:id)
// =======================
export const replaceProductValidator = [
  ...idParamValidator,
  ...createProductValidator, 
];

// =======================
// UPDATE PRICE (PATCH /:id/price)
// =======================
export const updateProductPriceValidator = [
  ...idParamValidator,
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
];
