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
          if (req.user) req.user = undefined;
          if (err.message === "jwt expired") next();
          else res.status(403).end("Forbidden");
        } else {
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
