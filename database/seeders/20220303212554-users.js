"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Teacher 1",
          birthday: "1990-01-01",
          userType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Teacher 2",
          birthday: "1990-02-02",
          userType: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Student 1",
          birthday: "2010-01-01",
          userType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Student 2",
          birthday: "2010-02-02",
          userType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Student 3",
          birthday: "2010-03-03",
          userType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Student 4",
          birthday: "2010-04-04",
          userType: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
