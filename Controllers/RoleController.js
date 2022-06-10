import RoleModel from "../Models/role_module/Role.js";

// Registering a new User
export const GetAllRole = async (req, res) => {
  //console.log(RoleModel.collection);
  try {
    const roles = await RoleModel.find();
    res.json(roles);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateRole = async (req, res) => {
  try {
    const role = new RoleModel(req.body);
    await role.save();
    res.json({ message: "Role created", role });
  } catch (error) {
    res.json({ message: error });
  }
};
