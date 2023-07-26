const express = require("express");
const membercl =  require("../../controller/member/member_controller");

const routerM = express.Router();

routerM.get("/login",membercl.login);
routerM.get("/login_check",membercl.login_check);
routerM.get("/list",membercl.list);
routerM.get("/info",membercl.info);


module.exports = routerM;