const router = require("express").Router();

const { chat } = require("../controller/chat");

// * GET /shelter/
router.get("/", chat);

module.exports = router;
