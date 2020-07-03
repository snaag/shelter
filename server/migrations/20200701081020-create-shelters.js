"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shelters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      SUM_DE: {
        type: Sequelize.STRING,
      },
      SIGUN_NM: {
        type: Sequelize.STRING,
      },
      SIGUN_CD: {
        type: Sequelize.STRING,
      },
      RESTARER_NM: {
        type: Sequelize.STRING,
      },
      BYPERD_TYPE: {
        type: Sequelize.STRING,
      },
      SEX_TYPE: {
        type: Sequelize.STRING,
      },
      INSTL_MAINAGNT_TYPE: {
        type: Sequelize.STRING,
      },
      OPERT_FORM_TYPE: {
        type: Sequelize.STRING,
      },
      OPERT_INST_NM: {
        type: Sequelize.STRING,
      },
      REPRSNTV_NM: {
        type: Sequelize.STRING,
      },
      HEADCHF_NM: {
        type: Sequelize.STRING,
      },
      OPNOFC_DE: {
        type: Sequelize.DATE,
      },
      CONTCT_NO: {
        type: Sequelize.STRING,
      },
      RM: {
        type: Sequelize.STRING,
      },
      REFINE_LOTNO_ADDR: {
        type: Sequelize.STRING,
      },
      REFINE_ROADNM_ADDR: {
        type: Sequelize.STRING,
      },
      REFINE_ZIP_CD: {
        type: Sequelize.STRING,
      },
      REFINE_WGS84_LOGT: {
        type: Sequelize.STRING,
      },
      REFINE_WGS84_LAT: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("shelters");
  },
};
