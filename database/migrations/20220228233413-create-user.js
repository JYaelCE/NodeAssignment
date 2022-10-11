"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        name: {
          type: Sequelize.TEXT,
        },
        birthday: {
          type: Sequelize.TEXT,
        },
        userType: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: "id",
            model: "userTypes",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        initialAutoIncrement: 100000,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
