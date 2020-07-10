const router = require("express").Router();
const { jwtVerify } = require("../utils/jwtVerify.js");

const userController = require("../controller/user");

// * POST /user/signup
router.post("/signup", userController.signup);

// * POST /user/signin
router.post("/signin", jwtVerify, userController.signin);

// * POST /user/signout
router.post("/signout", userController.signout);

//optional
// * GET /user/info
// router.get("/signout", userController.info);

module.exports = router;
