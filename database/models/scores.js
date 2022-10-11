"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scores extends Model {
    static associate(models) {
      scores.belongsTo(models.user, { foreignKey: "student"});
    }
  }
  scores.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: null,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
      },
      student: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: null,
        primaryKey: false,
        field: "student",
        autoIncrement: false,
        references: {
          key: "id",
          model: "user",
        },
      },
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "scores",
    }
  );
  return scores;
};
