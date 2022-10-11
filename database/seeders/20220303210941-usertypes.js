"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usertypes",
      [
        {
          type: "Teacher",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Student",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usertypes', null, {});
  },
};
