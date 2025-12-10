import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: String,
    class: String,
    rollNo: Number,
    month: String,
    section: String,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
