"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");

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
            .createHmac("sha256", "shelteretlehs")
            .update(staffs.password)
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
