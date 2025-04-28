import { Router } from "express";
import Course from "../Models/course.js";

let router = Router();

router.get("/", (req, res) => {
  res.json({
    Message: "Hello,By course Api...",
  });
});

router.get("/getlist", async (req, res) => {
  try {
    let allCourse = await Course.find().populate("TeacherId");
    res.json(allCourse);
  } catch (err) {
    res.json({ Message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);     
    res.json(course)
  } catch (err) {
    res.json({ Message: err });  
  }
});

router.post("/add", async (req, res) => {
  let course =  new Course({
    CourseName: req.body.CourseName,
    CourseBanner: req.body.CourseBanner,
    CourseDiscription: req.body.CourseDiscription,
    TeacherId:req.body.TeacherId,
  });
  try {
    let savedcourse = await course.save()
    res.json(savedcourse);
  } catch (err) {
    res.json({ Message: err });
  }
});

export default router;
