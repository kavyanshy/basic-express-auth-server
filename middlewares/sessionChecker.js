const mongoose = require("mongoose")
const Session = require("../models/saveTokenSchema")


const SessionCheck = async(req,res,nex) =>{
    const headerA = req.headers.authorization
    const user = await Session.findOne({sessionToken:headerA})
    
    
    if (user==null){res.json({state:"Invalid Session"})}
    else{
        const dat = Date.parse(user.createdAt)
        const now =  Date.now()
        const timeD =(Math.abs(now-dat))
        const hourD = Math.ceil(timeD / (1000 * 60 * 60 * 24)); 
        if (hourD>=3){
            res.json({state:"expired Session"})
            await Session.deleteOne({sessionToken:headerA})
        }

        nex()
    }
}

module.exports =SessionCheck