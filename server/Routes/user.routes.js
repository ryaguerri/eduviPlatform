import express from "express";
import {
  signup,
  login,
  getUserById,
  getUserByEmail,
  addBookByEmail,
  getBooksByEmail,
  deleteBookByEmailAndTitle,
  addCourseByEmail,
  getCoursesByEmail,
  deleteCourseByEmailAndTitle,
} from "../Controllers/user.controllers.js";
const router = express.Router();
router.post("/create-user", signup);
router.post("/login-user", login);
router.get("/user/:id", getUserById);
router.get("/usere/:email", getUserByEmail);
router.post("/users/:email/addbook", addBookByEmail);
router.get("/users/:email/books", getBooksByEmail);
router.delete("/users/:email/books", deleteBookByEmailAndTitle);
router.post("/users/:email/addcourse", addCourseByEmail);
router.get("/users/:email/courses", getCoursesByEmail);
router.delete("/users/:email/courses",deleteCourseByEmailAndTitle);
export default router;
