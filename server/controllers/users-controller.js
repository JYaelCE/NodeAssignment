const models = require("../../database/models/index");
const session = require("express-session");
const res = require("express/lib/response");
const { getStudents, getStudent } = require("./students-controller");

/*CRUD*/

const createUser = async (req, res) => {
  try {
    const user = await models.user.create({
      name: req.body.inputName,
      birthday: req.body.inputDate,
      userType: 1,
    });
    res.render("login", { user });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

/*Web*/

const login = async (req, res) => {
  try {
    const result = await models.user.findOne({
      where: {
        id: req.body.inputId,
        birthday: req.body.inputDate,
      },
    });
    if (!result) {
      res.status(204).json(null);
    } else {
      if (result.userType == 1) {
        const students = await getStudents();
        req.session.authenticated = true;
        const id = result.id;
        req.session.user = {
          id,
        };
        if (students.length == 0) {
          return res.status(204).json(null);
        } else {
          res.render("studentsListing", { students });
        }
      }else{
        const student = await getStudent(result.id) ;
        res.render("studentDetails", {student});
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const logout = async (req, res) => {
  req.session.destroy(null);
  res.redirect("/");
};

module.exports = { login, logout, createUser };
