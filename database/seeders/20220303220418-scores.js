"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          student: 100002,
          score: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student: 100003,
          score: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student: 100004,
          score: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student: 100005,
          score: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("scores", null, {});
  },
};
