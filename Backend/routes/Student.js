import { Router } from "express";
import Student from "../Models/student.js";

let router = Router();

router.get("/", (req, res) => {
  res.json({
    Message: "Hello,By Student Api..",
  });
});

router.get("/getList", async (req, res) => {
  try {
    let allStudents = await Student.find().populate("CourseId");
    res.json(allStudents);
  } catch (err) {
    res.json({ Message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let students = await Student.findById(req.params.id);
    res.json(students);
  } catch (err) {
    res.json({ Message: err });
  }
});

router.post("/add", async (req, res) => {
  let student = new Student({
    Profilepic: req.body.Profilepic,
    Name: req.body.Name,
    Age: req.body.Age,
    Grade: req.body.Grade,
    CourseId: req.body.CourseId,
  });
  try {
    let savedStudent = await student.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ Message: err });
  }
});

export default router;
