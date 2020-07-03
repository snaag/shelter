"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teens.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      age: DataTypes.INTEGER,
      tel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "teens",
    }
  );
  return teens;
};
