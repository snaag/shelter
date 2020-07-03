const axios = require("axios");
const { shelters } = require("../../models");
const apiKey = require("../../config/config.js").apiKey;

module.exports = {
  shelterController: {
    getAll: () => console.log("hi"),
    getInfo: () => console.log("bye"),
  },
};

const getShelters = async () => {
  try {
    let response = await axios.get(
      `https://openapi.gg.go.kr/YoungBoyAndGirsRestArea?KEY=${apiKey.gov}&type=json`
    );
    let sheltersArr = response.data.YoungBoyAndGirsRestArea[1].row;
    await sheltersArr.forEach(async el => {
      let [shelter, created] = await shelters.findOrCreate({
        where: {
          RESTARER_NM: el.RESTARER_NM,
          SEX_TYPE:
            el.SEX_TYPE.trim() === "남"
              ? "M"
              : el.SEX_TYPE.trim() === "여"
              ? "F"
              : "ALL",
          REFINE_LOTNO_ADDR: el.REFINE_LOTNO_ADDR,
          REFINE_ROADNM_ADDR: el.REFINE_ROADNM_ADDR,
          REFINE_WGS84_LOGT: el.REFINE_WGS84_LOGT,
          REFINE_WGS84_LAT: el.REFINE_WGS84_LAT,
        },
        defaults: {
          SIGUN_NM: el.SIGUN_NM,
          SIGUN_CD: el.SIGUN_CD,
          BYPERD_TYPE: el.BYPERD_TYPE,
          INSTL_MAINAGNT_TYPE: el.INSTL_MAINAGNT_TYPE,
          OPERT_FORM_TYPE: el.OPERT_FORM_TYPE,
          OPERT_INST_NM: el.OPERT_INST_NM,
          REPRSNTV_NM: el.REPRSNTV_NM,
          HEADCHF_NM: el.HEADCHF_NM,
          CONTCT_NO: el.CONTCT_NO,
          SUM_DE: el.SUM_DE,
          OPNOFC_DE: el.OPNOFC_DE,
          REFINE_ZIP_CD: el.REFINE_ZIP_CD,
          RM: el.RM === null ? "empty" : el.RM,
        },
      });
      if (!created) {
        await shelters.update(
          {
            SIGUN_NM: el.SIGUN_NM,
            SIGUN_CD: el.SIGUN_CD,
            BYPERD_TYPE: el.BYPERD_TYPE,
            INSTL_MAINAGNT_TYPE: el.INSTL_MAINAGNT_TYPE,
            OPERT_FORM_TYPE: el.OPERT_FORM_TYPE,
            OPERT_INST_NM: el.OPERT_INST_NM,
            REPRSNTV_NM: el.REPRSNTV_NM,
            HEADCHF_NM: el.HEADCHF_NM,
            CONTCT_NO: el.CONTCT_NO,
            SUM_DE: el.SUM_DE,
            OPNOFC_DE: el.OPNOFC_DE,
            REFINE_ZIP_CD: el.REFINE_ZIP_CD,
            RM: el.RM === null ? "empty" : el.RM,
          },
          {
            where: {
              RESTARER_NM: el.RESTARER_NM,
              REFINE_LOTNO_ADDR: el.REFINE_LOTNO_ADDR,
              REFINE_ROADNM_ADDR: el.REFINE_ROADNM_ADDR,
              REFINE_WGS84_LOGT: el.REFINE_WGS84_LOGT,
              REFINE_WGS84_LAT: el.REFINE_WGS84_LAT,
              SEX_TYPE:
                el.SEX_TYPE.trim() === "남"
                  ? "M"
                  : el.SEX_TYPE.trim() === "여"
                  ? "F"
                  : "ALL",
            },
          }
        );
      }
    });
  } catch (e) {
    console.error(e);
  }
};
getShelters();
