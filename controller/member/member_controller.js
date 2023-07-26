const service = require("../../service/member/member_service");
const login = (req,res)=> {
    res.render("member/login");
}
const login_check = (req,res) => {
    if (service.check(req.param("ID"), req.param("PWD")) == 1) {
        res.redirect("/member/list");
    }else {
        res.redirect("/member/login");
    }
}
const list = (req,res) => {
    dao = service.list();
    res.render("member/list", {dao});
}
const info = (req,res) => {
    dao = service.info();
    res.render();
}
module.exports = {login, login_check, list};