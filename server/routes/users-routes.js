const express = require("express");
const users = require("../controllers/users-controller.js");
const { validateData } = require("../utilies/validation.js");
const { body } = require("express-validator");

const router = express.Router();

router.route("/logout").get(users.logout);
router
  .route("/createUser")
  .post(
    body("inputName").notEmpty(),
    body("inputDate").notEmpty(),
    validateData,
    users.createUser
  );
router
  .route("/login")
  .post(
    body("inputId").notEmpty().isInt(),
    body("inputDate").notEmpty(),
    validateData,
    users.login
  );

module.exports = router;
