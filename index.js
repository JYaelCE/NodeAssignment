const server = require("./server/index.js")
const sequelize = require("./server/utilies/database.js")

const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database");
    server.listen(PORT, () => {
      console.log("Listening in the port: ", PORT);
    });
  })
  .catch((error) => {
    console.log("Couldn't connect to the database", error);
  });
