const axios = require("axios");
const { shelters } = require("../../models");
const apiKey = require("../../config/config.js").apiKey;
const url = require("url");

module.exports = {
  shelterController: {
    getList: async (req, res) => {
      // 없으면 전체 반환
      try {
        let queryLength = Object.keys(req.query).length; //query parameter 길이
        if (queryLength === 0) {
          //parameter가 없는 경우
          let data = await shelters.findAll();
          res.status(200).json({ shelters: data });
        } else {
          // 조건이 있으면 조건을 토대로 검사
          let queryData = url.parse(req.url, true).query; //url.parse를 통해 url을 객체화! true=객체화 / false=문자열

          let obj = {
            SIGUN_CD: queryData.SIGUN_CD,
            SEX_TYPE: queryData.SEX_TYPE,
            BYPERD_TYPE: queryData.BYPERD_TYPE,
          };
          let option = {}; //where문의 조건으로 들어갈 객체

          //option에 값을 넣을 함수
          function filter(queryKey) {
            if (obj[queryKey] !== undefined) {
              if (queryKey === "SEX_TYPE") {
                option[queryKey] = [obj[queryKey], "ALL"];
              } else {
                option[queryKey] = obj[queryKey];
              }
            }
          }
          //option에 값 넣는 작업
          for (let e in obj) {
            filter(e);
          }

          let data = await shelters.findAll({ where: option });

          if (data.length === 0) {
            res.status(404).send("데이터가 없습니다.");
          } else {
            res.status(200).json({ shelters: data });
          }
        }
      } catch (e) {
        console.log(e);
        res.status(500).send(e.name);
      }
    },
    getInfo: async (req, res) => {
      var queryData = url.parse(req.url, true).query.id;
      let data = shelters.findOne({ where: { id: queryData } });
      res.status(200).json(data);
    },
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
// getShelters();
