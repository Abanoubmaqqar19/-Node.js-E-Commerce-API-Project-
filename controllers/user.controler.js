// import User from "../modeles/usersModel.js";

// // GET ALL USERS
// export const getAllUsers = async (req, res) => {
//   const users = await User.getAllUsers();
//   return res.status(200).json(users);
// };

// // GET USER BY ID
// export const getUserByID = async (req, res) => {
//   const { idd } = req.params;
//   // const {}
//   const user = await User.getUserByID(idd);

//   if (!user) return res.status(404).json({ message: "User not found" });

//   return res.status(200).json(user);
// };

// // ADD NEW USER
// export const addUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password)
//     return res.status(400).json({ message: "Missing required fields" });

//   const newUser = await User.addUser({ name, email, password });
//   return res.status(201).json(newUser);
// };

// // UPDATE PASSWORD
// export const updateUserPWD = async (req, res) => {
//   const { id } = req.params;
//   const { password } = req.body;

//   if (!password)
//     return res.status(400).json({ message: "Password is required" });

//   const updatedUser = await User.updateUserPWD(id, password);
//   if (!updatedUser) return res.status(404).json({ message: "User not found" });

//   return res.status(200).json(updatedUser);
// };

// // DELETE USER
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   const deleted = await User.deleteUser(id);
//   if (!deleted) return res.status(404).json({ message: "User not found" });

//   return res.status(200).json({ message: "User deleted successfully" });
// };

import User from "../modeles/usersModel.js"
// import mongoose from "mongoose";
import HTTPError from "../utils/errorHttp.js";
export const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      message: "user created successfuly ",
      user,
    });
  } catch (err) {
    next(err);
  }
}



export const updateUserPWD = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return next(new HTTPError(404, "user not found"))
    }
    user.password = password || user.password;
    const newpwd = user.password;
    await user.save();
    return res.status(200).json({
      message: " password updated successfuly ",
      newpwd,
    });
  
  
  } catch (err) {
    // go to error handling midleware
    next(err)
    
  }
}

export const getAllUsers = async (req, res, next) => {
  try {

    const allusrs = await User.find();
    return res.status(201).json({
      message: " get all user successfuly ",
      allusrs,
      count: allusrs.length,
    });

  
  } catch (err) {
  next(err)
  
  }}

export const getUserByID = async (req, res, next) => {

  try{
 
  const { id } = req.params;
  const usr = await User.findById(id);
  console.log(usr)
 

  if (!usr)
  {
     return res.status(404).json({
       message: "user not exist ",
     
     });
  }
  else {
    return res.status(200).json({
      message: "user founded successfuly ",
     
      usr,
    });
    }
    } catch (err) {
  next(err)
  
  }
  
}


export const deleteUser = async (req, res, next) => {
  try{
 const { id } = req.params;
  const usr = await User.findById(id);
  console.log(usr)
 

  if (!usr)
  {
     return res.status(404).json({
       message: "user not exist ",
     
     });
  }

  const dltedusr = await usr.deleteOne();
  
   return res.status(200).json({
     message: "user deleted successfuly",
     dltedusr ,
   });


} catch (err) {
  next(err)
  
  }}