import AnswerModel from "../Models/exam_module/Answer.js";

export const GetAllAnswer = async (req, res) => {
  try {
    const answer = await AnswerModel.find();
    res.json(answer);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateCandidateAnswer = async (req, res) => {
  try {
    const answer = new AnswerModel(req.body);
    await answer.save();
    res.json({ message: "Candidate answer inserted", answer });
  } catch (error) {
    res.json({ message: error });
  }
};
