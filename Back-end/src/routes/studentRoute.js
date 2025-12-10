import express from "express";
import { createStudent,findAllStudents } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/students", createStudent);
router.get("/findAllStudents", findAllStudents);

export default router;
