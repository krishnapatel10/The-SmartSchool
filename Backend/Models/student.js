import mongoose from "mongoose"

let studentSchema = new mongoose.Schema({
    Profilepic:String,
    Name:String,
    Age:Number,
    Grade:Number,
    CourseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course" // Reference to Course model
    }
})
let Student = mongoose.model("Student",studentSchema);

export default Student;