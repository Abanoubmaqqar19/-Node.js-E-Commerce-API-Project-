import User from "../modeles/usersModel.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const users = await User.getAllUsers();
  return res.status(200).json(users);
};

// GET USER BY ID
export const getUserByID = async (req, res) => {
  const { idd } = req.params;
  const user = await User.getUserByID(idd);

  if (!user) return res.status(404).json({ message: "User not found" });

  return res.status(200).json(user);
};

// ADD NEW USER
export const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Missing required fields" });

  const newUser = await User.addUser({ name, email, password });
  return res.status(201).json(newUser);
};

// UPDATE PASSWORD
export const updateUserPWD = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  if (!password)
    return res.status(400).json({ message: "Password is required" });

  const updatedUser = await User.updateUserPWD(id, password);
  if (!updatedUser) return res.status(404).json({ message: "User not found" });

  return res.status(200).json(updatedUser);
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deleted = await User.deleteUser(id);
  if (!deleted) return res.status(404).json({ message: "User not found" });

  return res.status(200).json({ message: "User deleted successfully" });
};
