import TechnologyModel from "../Models/role_module/Technology.js";

// Registering a new User
export const GetAllTechnologies = async (req, res) => {
  try {
    const technologies = await TechnologyModel.find();
    res.json(technologies);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateTechnologies = async (req, res) => {
  try {
    const user = new TechnologyModel(req.body);
    await user.save();
    res.json({ message: "Technology Created", user });
  } catch (error) {
    res.json({ message: error });
  }
};
