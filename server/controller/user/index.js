const { staffs, teens } = require("../../models");
const { tokenGenerator } = require("../../utils/tokenGenerator");

module.exports = {
  signup: async (req, res) => {
    try {
      let {
        type,
        sex,
        birthdate,
        email,
        name,
        password,
        tel,
        shelterId,
      } = req.body;
      if (type === "staff") {
        const [user, created] = await staffs.findOrCreate({
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
          res.status(401).send(`Userwith email: ${email} already exists`);
        } else {
          res.status(201).send({ id: user.id });
        }
      } else if (type === "teen") {
        const teen = await teens.create({
          name,
          sex,
          birthdate: birthdate,
          tel,
        });
        if (teen) {
          res.status(201).send({ id: teen.id });
        } else res.sendStatus(400);
      } else res.status(400).send("Please input correct type");
    } catch (e) {
      res.status(500).send("Sorry, cannot process your request now");
    }
  },
  signin: async (req, res) => {
    try {
      let { type, email, password, tel, name } = req.body;
      let user;
      if (type === "staff") {
        user = await staffs.findOne({
          where: {
            email: email,
            password: password,
          },
        });
      } else if (type === "teen") {
        user = await teens.findOne({
          where: {
            tel: tel,
            name: name,
          },
        });
      } else {
        res.status(400).send("cannot recognize type of request");
      }
      if (user) {
        if (req.user === undefined) {
          let token = tokenGenerator(user.dataValues, req);
          res.cookie("authorization", token);
          res.status(200).send({ id: user.id });
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
            res.status(200).send({ id: user.id });
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
