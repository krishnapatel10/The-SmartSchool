import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import "dotenv/config";

// import Routes

import TeacherRouter from "./routes/teacher.js"
import StudentRouter from "./routes/Student.js"
import CourceRouter from "./routes/Course.js"





let app = express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Mongodb connected..")})
    .catch((err) => console.log(err));;


// Apis:

app.use("/api/teacher",TeacherRouter);
app.use("/api/student",StudentRouter)
app.use("/api/course",CourceRouter)





// Listen:
app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is running on Port 5500`);
});


