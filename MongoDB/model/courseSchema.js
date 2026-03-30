import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    course_id:{
        require:true,
    },
    title:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true,
        min:[2,"duration mus be atleast 2 years"]
    },
    price:{
        type:Number,
        require:true,

    },
    instructor_id:{
        require:true,
        type:Number
    }
});
const course=mongoose.model("course",courseSchema);