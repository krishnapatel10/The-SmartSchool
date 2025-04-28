import mongoose from "mongoose";

let courseSchema = new mongoose.Schema({
    CourseName:String,
    CourseBanner:String,
    CourseDiscription:String,
    TeacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher' /// Reference to the Teacher model
    }
})
export default mongoose.model("Course",courseSchema)
