import mongoose from "mongoose";

let teacherSchema = new mongoose.Schema({
    Profilepic:String,
    Name:String,
    Age:Number,
    Exp:Number,

})
let Teacher = mongoose.model("Teacher",teacherSchema);

export default Teacher;
