const { staffs } = require("../../models");
const crypto = require("crypto");

module.exports = {
  signup: async (req, res) => {
    try {
      let { email, name, password, tel, shelterId } = req.body;
      //스태프가 존재하는지 확인, 없으면 생성
      const [staff, created] = await staffs.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          name: name,
          tel: tel,
          shelterId: shelterId,
          password: password,
        },
      });
      //생성되지 않았을 경우 이미 유저가 존재한다고 가정하고 304 전송
      //생성되었을 경우 200 전송
      if (!created) {
        res.status(401).send(`User with email: ${email} already exists`);
      } else {
        //TODO : **세션 구현 여부에 따라 아래 부분 추가.**
        res.status(200).send("Sign up");
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

      //패스워드 암호화 시켜서 대조
      password = crypto
        .createHmac("sha256", "shelteretlehs")
        .update(password)
        .digest("hex");

      let user = await staffs.findOne({
        where: {
          email: email,
          password: password,
        },
      });

      //유저 이메일 패스워드가 일치할시에는 로그인 및 200 전송
      //유저 이메일 패스워드가 일치하지 않을시에는 400 전송.
      if (user) {
        res.status(200).send(`Welcome ${email}`);
      } else {
        //TODO : **세션 구현 여부에 따라 아랫 부분에 이미 로그인 되어 있는 유저에게 300대 전송.**
        res.status(400).send("Username or password is not correct");
      }
    } catch (e) {
      //서버 에러시 500 전송
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
  signout: (req, res) => {
    console.log("bye");
  },
};