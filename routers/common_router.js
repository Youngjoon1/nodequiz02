const express = require("express");
const cl =  require("../controller/common_controller");

const router = express.Router();

router.get("/",cl.index );

module.exports = router;