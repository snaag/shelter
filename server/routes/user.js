const router = require("express").Router();

const { userController } = require("../controller/user");

// * POST /user/signup
router.post("/signup", userController.signup);

// * POST /user/signin
router.post("/signin", userController.signin);

// * POST /user/signout
router.post("/signout", userController.signout);

//optional
// * GET /user/info
// router.get("/signout", userController.info);

module.exports = router;
