"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class staffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staffs.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      tel: DataTypes.STRING,
      shelterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "staffs",
    }
  );
  return staffs;
};
