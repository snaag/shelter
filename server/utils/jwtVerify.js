const jwt = require("jsonwebtoken");
const { secret } = require("../config/config.js");

module.exports = {
  jwtVerify: function (req, res, next) {
    let token = req.cookies.authorization;
    if (token === "undefined" || !token) {
      next();
    } else {
      jwt.verify(token, secret.shelter, (err, user) => {
        if (err) {
          //에러 발생시 안전을 위해 req.user 값 (token 생성 날짜 및 유저 개인 정보) undefined 로 만들어주기
          //jwt expired 되어서 에러 발생 시 컨트롤러로에서 거를수 있게 혀용.
          //다른 에러라면 보안상 Forbidden 처리
          if (req.user) req.user = undefined;
          if (err.message === "jwt expired") next();
          else res.status(403).end("Forbidden");
        } else {
          //토큰은 호스트 네임과 현재 request 의 호스트 네임이 다를 시 토큰 초기화 및 접근 불가.
          if (user.hostname !== req.hostname) {
            res.cookie("authorization", undefined);
            res.status(403).end("Forbidden");
          } else {
            req.user = user;
            next();
          }
        }
      });
    }
  },
};
