const { staffs } = require("../../models");
const { tokenGenerator } = require("../../utils/tokenGenerator");

module.exports = {
  signup: async (req, res) => {
    try {
      let { email, name, password, tel, shelterId } = req.body;
      //스태프가 존재하는지 확인, 없으면 생성
      const [staff, created] = await staffs.findOrCreate({
        where: {
          email,
        },
        defaults: {
          name,
          tel,
          shelterId,
          password,
        },
      });
      //생성되지 않았을 경우 이미 유저가 존재한다고 가정하고 304 전송
      //생성되었을 경우 200 전송
      if (!created) {
        res.status(401).send(`User with email: ${email} already exists`);
      } else {
        //TODO : **세션 구현 여부에 따라 아래 부분 추가.**
        res.status(201).send("Sign up");
      }
    } catch (e) {
      // 세버 에러시 500 전송
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
  signin: async (req, res) => {
    try {
      //유저가 이메일과 패스워드로 인증.
      let { email, password } = req.body;
      let user = await staffs.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      //유저 이메일 패스워드가 일치할시에는 로그인 및 200 전송
      //유저 이메일 패스워드가 일치하지 않을시에는 403 전송.
      if (user) {
        //jwt 없을 경우 새로 만들어서 전송
        //jwt token 있을 경우 확인, 미들웨어에서 유효성 관리 해주만, 미들웨어에서 전달하는 유저와 동일한지 확인 되는지 확인 해야됨.
        //위에서 유저 이메일과 패스워드 확인 후 아래에서는 token 생성;
        if (req.user === undefined) {
          let token = tokenGenerator(user.dataValues, req);
          res.cookie("authorization", token);
          res.status(200).send(`Welcome ${req.body.email}`);
        } else {
          //토큰이 있을 경우 토큰 안에 있는 유저 정보가 정확한지 확인;
          //유저 정보가 DB에 있는 유저 정보와 상이할시 idChecked false 값.
          let idChecked = true;
          let skip = ["iat", "exp", "expiredAt", "hostname"];

          for (let attribute in req.user) {
            if (skip.includes(attribute)) continue;
            if (req.user[attribute] !== user.dataValues[attribute]) {
              idChecked = false;
            }
          }
          if (idChecked) {
            res
              .status(200)
              .send(`Hi ${req.body.email}, you are already logged-in`);
          } else {
            //토큰값과 디비 정보 불일치할시 유저가 아니라고 간주 하고 토큰 삭제.
            if (req.cookies.authorization) {
              res.cookie("authorization", undefined);
            }
            res.status(403).send("Forbidden");
          }
        }
      } else {
        res.status(403).send("Username or password is not correct");
      }
    } catch (e) {
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
  signout: (req, res) => {
    try {
      if (req.cookies.authorization === "undefined") {
        res.status(400).end("You are not logged in");
      } else {
        req.user = undefined;
        res.cookie("authorization", undefined);
        res.status(200).send("Logged out");
      }
    } catch (e) {
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
};
