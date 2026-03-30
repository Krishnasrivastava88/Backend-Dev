import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  Roll: {
    type: Number,
    required: true,
    max: [99, "Roll must be 2 digits"],
  },
  branch: {
    type: String,
    enum: ["CSE", "IT", "ECE"],
    default: "CSE",
  },
  marks: {
    type: Number,
    min: [0, "marks cannot be less than 0"],
    max: [100, "marks cannot exceed 100"],
  },
});

const student = mongoose.model("Student", studentSchema);

export default user;