import UserModel from "../Models/role_module/User.js";

// Registering a new User
export const GetAllUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.json({ message: "User Created", user });
  } catch (error) {
    res.json({ message: error });
  }
};
