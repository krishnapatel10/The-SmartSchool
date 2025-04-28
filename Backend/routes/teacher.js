import { Router } from "express";
import Teacher from "../Models/teacher.js";

let router = Router();

router.get("/", (req, res) => {
  res.json({
    Message: "Hello,By Teachers Api..",
  });
});

router.get("/getList", async (req, res) => {
  try {
    let allTeachers = await Teacher.find();
    res.json(allTeachers);
  } catch (err) {
    res.json({ Message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
  } catch (err) {
    res.json({ Message: err });
  }
});

router.post("/add", async (req, res) => {
  let teacher = new Teacher({
    Profilepic: req.body.Profilepic,
    Name: req.body.Name,
    Age: req.body.Age,
    Exp: req.body.Exp,
  });
  try {
    let savedTeacher = await teacher.save();
    res.json(savedTeacher);
  } catch (err) {
    res.json({ Message: err });
  }
});

export default router;
