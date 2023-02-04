const { controller } = require("../controller.js");
const express = require("express");
const router = express.Router();

router.get("/naver", controller.getNaverData);
router.get("/kobis/", controller.getKobisData);
router.get("/kobis/title", controller.getKobisTitle);

module.exports = router;
