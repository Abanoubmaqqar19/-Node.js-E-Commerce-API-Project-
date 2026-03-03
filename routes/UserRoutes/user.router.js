import { Router } from "express";
//  import handelers from controller

import {
  getAllUsers,
  getUserByID,
  deleteUser,
  updateUserPWD,
  addUser,
} from "../../controllers/user.controler.js";


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
router.get('/',getAllUsers)
router.patch('/:id', updateUserPWD)
router.delete('/:id', deleteUser)
router.post('/', addUser)






// dynamic routes
router.get("/:id", getUserByID);





export default router;