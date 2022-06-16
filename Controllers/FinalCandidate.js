import FinalCandidateModel from "../Models/evaluations/FinalCandidate.js";

export const GetAllFinalCandidate = async (req, res) => {
  try {
    const candidates = await FinalCandidateModel.find();
    res.json(candidates);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateFinalCandidate = async (req, res) => {
  try {
    const candidate = new FinalCandidateModel(req.body);
    await candidate.save();
    res.json({ message: "Final Candidate created", candidate });
  } catch (error) {
    res.json({ message: error });
  }
};
