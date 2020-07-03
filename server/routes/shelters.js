const router = require("express").Router();

const { shelterController } = require("../controller/shelter");

// * GET /shelter/
router.get("/", shelterController.getList);

// * GET /shelter/info
router.get("/info", shelterController.getInfo);

module.exports = router;
