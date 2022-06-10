import QuestionTypeModel from "../Models/question_module/QuestionType.js";

export const GetAllQuestionTypes = async (req, res) => {
  try {
    const questions = await QuestionTypeModel.find();
    res.json(questions);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateQuestionType = async (req, res) => {
  try {
    const questionType = new QuestionTypeModel(req.body);
    await questionType.save();
    res.json({ message: "QuestionType created", questionType });
  } catch (error) {
    res.json({ message: error });
  }
};
