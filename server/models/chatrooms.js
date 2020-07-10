"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chatRooms extends Model {
    static associate(models) {}
  }
  chatRooms.init(
    {
      staffId: DataTypes.INTEGER,
      teenId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "chatRooms",
    }
  );
  return chatRooms;
};
