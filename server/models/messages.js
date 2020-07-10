"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    static associate(models) {}
  }
  messages.init(
    {
      type: DataTypes.STRING,
      senderId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      textContent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "messages",
    }
  );
  return messages;
};
