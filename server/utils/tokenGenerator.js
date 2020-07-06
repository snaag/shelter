const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

module.exports = {
  tokenGenerator: ({ id, email, name }, { hostname }) => {
    let token = jwt.sign(
      {
        id,
        email,
        name,
        hostname,
      },
      secret.shelter,
      { expiresIn: "15m" }
    );
    return token;
  },
};
