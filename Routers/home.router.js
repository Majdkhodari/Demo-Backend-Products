const express = require("express");
const { home } = require("../Controllers/home.controller");
const router = express.Router();

router.get("/", home);

module.exports = router;
