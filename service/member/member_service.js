const DAO = require("../../database/member/memberDAO");
const check = (id, pw)=>{
    for(let i=0;i < DAO.length;i++) {
        if(id == DAO[i].id && pw == DAO[i].name) {
            return 1;
        }else {
            return 0;
        }
    }
}
const list = ()=>{
    return DAO;
}
module.exports = {check,list};