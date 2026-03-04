// Create user


import { body , param } from "express-validator";

export const createUserValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 20, min: 3 })
    .withMessage("name must >20  and >4"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("pwd is required")
    .isLength({ min: 8 })
    .withMessage("pwd should be more than 7 char"),
];



export const idParamValidator = [
  param("id")
    .notEmpty()
    .withMessage("Missing ID parameter")
    .isMongoId()
    .withMessage("Invalid Mongo ID format"),
];


export const updatePasswordValidator = [
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters"),
];