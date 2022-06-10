import ExamModel from "../Models/exam_module/Exam.js";

export const GetAllExams = async (req, res) => {
  try {
    const exams = await ExamModel.find();
    res.json(exams);
  } catch (error) {
    res.json({ message: error });
  }
};

export const CreateExam = async (req, res) => {
  try {
    const exam = new ExamModel(req.body);
    await exam.save();
    res.json({ message: "exam created", exam });
  } catch (error) {
    res.json({ message: error });
  }
};
