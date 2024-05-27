const express = require("express");

const {generatenewURL} = require("../controller/url")

const router = express.Router();

router.post("/",generatenewURL);

module.exports = router;



