const res = require("express/lib/response");
const models = require("../../database/models/index");

/*CRUD*/

const createStudent = async (req, res) => {
  try {
    const user = await models.user
      .create({
        name: req.body.inputName,
        birthday: req.body.inputDate,
        userType: 2,
      })
      .then(async (user) => {
        await models.scores.create({
          student: user.id,
          score: req.body.inputScore,
        });
      });
    const students = await getStudents();
    if (students.length == 0) {
      return res.status(204).json(null);
    } else {
      res.render("studentsListing", { students });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getStudents = async () => {
  const students = await models.userType.findAll({
    where: { id: 2 },
    attributes: [
      "users.id",
      "users.name",
      "users.birthday",
      "users.score.score",
    ],
    raw: true,
    include: [
      {
        model: models.user,
        attributes: [],
        include: [
          {
            model: models.scores,
            attributes: [],
          },
        ],
      },
    ],
  });
  return students;
};

const getStudent = async (id) => {
  const student = await models.user.findOne({
    where: { id: id, userType: 2 },
    attributes: ["id", "name", "birthday", "score.score"],
    raw: true,
    include: [
      {
        model: models.scores,
        attributes: [],
      },
    ],
  });
  return student;
};

const editStudent = async (req, res) => {
  try {
    const student = await getStudent(req.query.studentId);
    if (student != null) {
      res.render("editStudent", { student });
    } else {
      res.status(400).json({ msn: "bad request" });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};

const saveStudent = async (req, res) => {
  try {
    const update = await models.user
      .update(
        { name: req.body.inputName, birthday: req.body.inputDate },
        { where: { id: req.body.inputId, userType: 2 } }
      )
      .then(
        models.scores.update(
          { score: req.body.inputScore },
          { where: { student: req.body.inputId } }
        )
      );
    console.log(update[0]);
    if (update[0] == 0) {
      return res.status(204).json(null);
    } else {
      const students = await getStudents();
      if (students.length == 0) {
        return res.status(204).json(null);
      } else {
        res.render("studentsListing", { students });
      }
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};

const deleteStudent = async (req, res) => {
  const del = await models.user.destroy({
    where: { id: req.query.studentId, userType: 2 },
  });
  if (del == 0) {
    return res.status(204).json(null);
  } else {
    const students = await getStudents();
    return res.render("studentsListing", { students });
  }
};

/*Web*/

const addStudent = async (req, res) => {
  res.render("addStudent");
};

module.exports = {
  getStudents,
  getStudent,
  deleteStudent,
  editStudent,
  addStudent,
  saveStudent,
  createStudent,
};
