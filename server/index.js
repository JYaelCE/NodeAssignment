const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

/*Routes*/
const students = require("./routes/students-routes.js");
const users = require("./routes/users-routes.js");
const views = require("./routes/views-routes.js");


const store = new session.MemoryStore();
const server = express();
server.use(morgan("dev"));
server.use(cors());
server.options("*", cors());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(
  session({
    secret: "express secret",
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    resave: false,
    store,
  })
);
server.use(express.json({extended: true}));
server.set("view engine", "ejs");
server.use(express.static(__dirname + "/public"));
server.use(students);
server.use(users);
server.use(views);

module.exports = server;
