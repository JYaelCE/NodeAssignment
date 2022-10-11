"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.belongsTo(models.userType, {foreignKey: "userType", as: "UserType"});
      user.hasOne(models.scores, {foreignKey: "student"});
    }
  }
  user.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: null,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: null,
        primaryKey: true,
        field: "name",
        autoIncrement: false,
      },
      birthday: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: null,
        primaryKey: true,
        field: "birthday",
        autoIncrement: false,
      },
      userType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: null,
        primaryKey: false,
        field: "userType",
        autoIncrement: false,
        references: {
          key: "id",
          model: "userType",
        },
      },
    },
    {
      sequelize,
      modelName: "user",
      initialAutoIncrement: 1000,
    }
  );
  return user;
};
