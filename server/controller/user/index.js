const { staffs } = require("../../models");
const { tokenGenerator } = require("../../utils/tokenGenerator");

module.exports = {
  signup: async (req, res) => {
    try {
      let { email, name, password, tel, shelterId } = req.body;
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
      if (!created) {
        res.status(401).send(`User with email: ${email} already exists`);
      } else {
        res.status(201).send("Sign up");
      }
    } catch (e) {
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
  signin: async (req, res) => {
    try {
      let { email, password } = req.body;
      let user = await staffs.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      if (user) {
        if (req.user === undefined) {
          let token = tokenGenerator(user.dataValues, req);
          res.cookie("authorization", token);
          res.status(200).send(`Welcome ${req.body.email}`);
        } else {
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
