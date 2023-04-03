const exp = require("express");
const SessionCheck = require("./middlewares/sessionChecker");
const login = require("./middlewares/loginVerify")
const replaceStr = require("./models/saveusers")
const token = require("./models/token")
const app =  exp()
app.use(exp.json());
app.use(exp.urlencoded());


app.post("/signup/",async (req,res,nx)=>{

  const email = req.body.email
  const pass = req.body.pass
  const name = req.body.name
  
  const result = await replaceStr.saveuser(email,pass,name,nx)


    res.json({name:result})
})

app.post("/login",login.LoginVerfiy,async (req,res,nx)=>{

 
  
  const result = await replaceStr.saveuser(email,pass,name,nx)


    res.json({name:result})
})



app.get("/verify",async (req,res,nx)=>{

    const toke = req.headers.authorization

    const decode =await token.verify(toke)

    res.json({decode:decode})
})

app.get("/kl",SessionCheck,async(req,res,nx)=>{
 
  res.json({state:"allowed"})
})


app.listen(3100,()=>{console.log("running")})