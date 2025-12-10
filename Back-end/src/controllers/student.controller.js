import Student from "../models/student.js";

/**
 * @desc   Create new student
 * @route  POST /api/students
 * @access Public
 */
export const createStudent = async (req, res) => {
//    return res.josn({message:"ok"})
  try {
    const { name, className, rollNo, section, month } = req.body;

    if (!name || !className || !rollNo || !section || !month) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const student = await Student.create({
      name,
      class: className,
      rollNo,
      section,
      month,
    });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: student,
    });

  } catch (error) {
    console.error("Create Student Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const findAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.error("Fetch Students Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
