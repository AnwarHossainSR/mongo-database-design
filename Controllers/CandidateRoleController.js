import CandidateRoleModel from "../Models/question_module/CandidateRole.js";

export const GetAllCandidateRole = async (req, res) => {
  try {
    const roles = await CandidateRoleModel.find();
    res.json(roles);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateCandidateRole = async (req, res) => {
  try {
    const role = new CandidateRoleModel(req.body);
    await role.save();
    res.json({ message: "Candidate Role created", role });
  } catch (error) {
    res.json({ message: error });
  }
};
