const express = require("express");
const students = require("../controllers/students-controller.js");
const {
  validateData,
  validateSesion,
} = require("../utilies/validation.js");
const { body } = require("express-validator");

const router = express.Router();

router.route("/deleteStudent").get(validateSesion, students.deleteStudent);
router.route("/editStudent").get(validateSesion, students.editStudent);
router.route("/addStudent").get(validateSesion, students.addStudent);
router
  .route("/saveStudent")
  .post(
    body("inputId").notEmpty().isInt(),
    body("inputName").notEmpty(),
    body("inputDate").notEmpty(),
    body("inputScore").notEmpty().isInt(),
    validateData,
    validateSesion,
    students.saveStudent
  );
router
  .route("/createStudent")
  .post(
    body("inputName").notEmpty(),
    body("inputDate").notEmpty(),
    body("inputScore").notEmpty().isInt(),
    validateData,
    validateSesion,
    students.createStudent
  );

module.exports = router;
