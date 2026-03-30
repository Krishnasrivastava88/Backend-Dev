import mongoose from "mongoose";
 
const connectDb =async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/BackendDb");
    console.log("connection done00");
    } catch (error){
        console.log("connection fail",error)
    }

}

export default connectDb;