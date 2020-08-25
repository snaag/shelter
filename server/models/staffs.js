"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");
const { secret } = require("../config/config.js");

module.exports = (sequelize, DataTypes) => {
  class staffs extends Model {}

  staffs.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      tel: DataTypes.STRING,
      shelterId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (staffs, options) => {
          staffs.password = crypto
            .createHmac("sha256", secret.shelter)
            .update(staffs.password)
            .digest("hex");
        },
        beforeFind: (staffs, options) => {
          if (!staffs.where.password) return;
          staffs.where.password = crypto
            .createHmac("sha256", secret.shelter)
            .update(staffs.where.password)
            .digest("hex");
        },
      },
      sequelize,
    },
    {
      modelName: "staffs",
    }
  );
  return staffs;
};
