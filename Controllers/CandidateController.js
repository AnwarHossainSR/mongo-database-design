import CandidatesModel from "../Models/candidates_module/Candidate.js";

export const GetAllCandidate = async (req, res) => {
  try {
    const candidates = await CandidatesModel.find();
    res.json(candidates);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateCandidate = async (req, res) => {
  try {
    const candidate = new CandidatesModel(req.body);
    await candidate.save();
    res.json({ message: "Candidate created", candidate });
  } catch (error) {
    res.json({ message: error });
  }
};
