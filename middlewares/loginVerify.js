const { getToken } = require("../models/token")
const User = require("../mongoSchema")


const LoginVerfiy = async (req,res,nex) =>{
    const email = req.body.email
    const pass = req.body.pas 
    console.log(req.body.email,req.body.pass)
    const ans = await User.find({email:req.body.email})
    console.log(ans[0])
    if (ans[0]){
        
        res.json({token:getToken({email,pass})})
    }else{res.json({state:"invalid Credentials"})}
    
}

module.exports ={LoginVerfiy}