"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userType extends Model {
    static associate(models) {
      userType.hasMany(models.user, {foreignKey: "userType"});
    }
  }
  userType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: null,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: null,
        primaryKey: false,
        field: "type",
        autoIncrement: false,
      },
    },
    {
      sequelize,
      modelName: "userType",
    }
  );
  return userType;
};
