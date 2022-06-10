import QuestionModel from "../Models/question_module/Question.js";

export const GetAllQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    res.json(questions);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateQuestion = async (req, res) => {
  try {
    const question = new QuestionModel(req.body);
    await question.save();
    res.json({ message: "Question created", question });
  } catch (error) {
    res.json({ message: error });
  }
};
