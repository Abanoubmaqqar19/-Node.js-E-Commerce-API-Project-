import { Router } from "express";
//  import handelers from controller

import {
  getAllUsers,
  getUserByID,
  deleteUser,
  updateUserPWD,
  addUser,
} from "../../controllers/user.controler.js";

import {
  createUserValidator,
  idParamValidator,
  updatePasswordValidator,
} from "../../validation/userValidatorMW.js";
import validationResult  from "../../validation/validationResult.js";

const router = Router();

// static routes 
router.get('/validate',(req, res) => {
    const validat = req.params.validate;
    if (validat) {
         return res.status(200).send(`validat  success`);
    }
    else
         return res.status(200).send(`validat NOT success `);
   
})



router.post("/",createUserValidator,validationResult, addUser);
router.get('/',getAllUsers)
router.patch('/:id',updatePasswordValidator,validationResult, updateUserPWD)
router.delete("/:id", idParamValidator, validationResult,deleteUser);







// dynamic routes
router.get("/:id", idParamValidator,validationResult, getUserByID);





export default router;