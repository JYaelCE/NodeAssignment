const { redirect } = require("express/lib/response");
const models = require("../../database/models/index");
const { getStudents } = require("./students-controller");

const mainPage = (req, res) => {
  res.render("login");
};

const singIn = (req, res) => {
  res.render("signUp");
};

const cancelEdit = async (req, res) => {
  const students = await getStudents();
  res.render("studentsListing", { students });
};

const returnL = (req, res) => {
  res.redirect("/");
}

module.exports = { mainPage, singIn, cancelEdit, returnL };
