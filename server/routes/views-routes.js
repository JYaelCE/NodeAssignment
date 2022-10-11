const express = require("express");
const views = require("../controllers/views-controller.js");
const { validateSesion } = require("../utilies/validation.js");
const router = express.Router();

router.route("/").get(views.mainPage);
router.route("/signUp").get(views.singIn);
router.route("/return").get(views.returnL);
router.route("/cancelEdit").get(validateSesion, views.cancelEdit);

module.exports = router;
