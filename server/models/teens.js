"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teens extends Model {
    static associate(models) {}
  }
  teens.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      tel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "teens",
    }
  );
  return teens;
};
