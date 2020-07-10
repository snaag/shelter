"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shelters extends Model {
    static associate(models) {}
  }
  shelters.init(
    {
      SUM_DE: DataTypes.STRING,
      SIGUN_NM: DataTypes.STRING,
      SIGUN_CD: DataTypes.STRING,
      RESTARER_NM: DataTypes.STRING,
      BYPERD_TYPE: DataTypes.STRING,
      SEX_TYPE: DataTypes.STRING,
      INSTL_MAINAGNT_TYPE: DataTypes.STRING,
      OPERT_FORM_TYPE: DataTypes.STRING,
      OPERT_INST_NM: DataTypes.STRING,
      REPRSNTV_NM: DataTypes.STRING,
      HEADCHF_NM: DataTypes.STRING,
      OPNOFC_DE: DataTypes.DATE,
      CONTCT_NO: DataTypes.STRING,
      RM: DataTypes.STRING,
      REFINE_LOTNO_ADDR: DataTypes.STRING,
      REFINE_ROADNM_ADDR: DataTypes.STRING,
      REFINE_ZIP_CD: DataTypes.STRING,
      REFINE_WGS84_LOGT: DataTypes.STRING,
      REFINE_WGS84_LAT: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "shelters",
    }
  );
  return shelters;
};

// axios({
//   url:
//     "https://openapi.gg.go.kr/YoungBoyAndGirsRestArea?KEY=2c6fd9ed84e24b3c8c6f6c2439e7ca3d",
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//   },
// }).then(response => console.log(response.status));
