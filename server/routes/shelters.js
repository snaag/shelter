const router = require("express").Router();

const { shelterController } = require("../controller/shelter");

// * GET /shelter/
router.get("/", shelterController.getAll);

// * GET /shelter/:id
router.get("/:id", shelterController.getInfo);

module.exports = router;
