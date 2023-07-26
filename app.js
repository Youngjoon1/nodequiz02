const express = require("express");
const router = require("./routers/common_router");
const routerMember = require("./routers/member/member_router");
const app = express();


app.set("views","./views");
app.set("view engine","ejs");

app.use("/",router);
app.use("/member",routerMember);

app.listen(3000,()=>{console.log("3000 port server")});