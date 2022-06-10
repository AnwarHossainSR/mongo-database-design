import QuestionSetModel from "../Models/question_module/QuestionSet.js";

export const GetAllQuestionSets = async (req, res) => {
  try {
    const questionSet = await QuestionSetModel.find();
    console.log("try");
    res.json(questionSet);
  } catch (error) {
    console.log("error");
    res.json({ message: error });
  }
};

export const CreateQuestionSet = async (req, res) => {
  try {
    const questionSet = new QuestionSetModel(req.body);
    await questionSet.save();
    res.json({ message: "QustionSet created", questionSet });
  } catch (error) {
    res.json({ message: error });
  }
};
