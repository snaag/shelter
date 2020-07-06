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
          staffs.email = crypto
            .createHmac("sha256", secret.shelter)
            .update(staffs.email)
            .digest("hex");
          staffs.name = crypto
            .createHmac("sha256", secret.shelter)
            .update(staffs.name)
            .digest("hex");
        },
        beforeFind: (staffs, options) => {
          for (let condition in staffs.where) {
            staffs.where[condition] = crypto
              .createHmac("sha256", secret.shelter)
              .update(staffs.where[condition])
              .digest("hex");
          }
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
