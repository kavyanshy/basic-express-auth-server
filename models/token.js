const jwt = require('jsonwebtoken');

const secretKey = 'sdsadasdasdas';
const { default: mongoose } = require("mongoose")
const User = require("../mongoSchema");
const Session = require("./saveTokenSchema")

var randomstring = require("randomstring");
const getToken = (user) =>{
    return jwt.sign(user,secretKey)
}

const generateSession = (token)=>{
}

const verify = async (token) =>{
  
    try {
        const decode = jwt.decode(token,secretKey)

        const sear = await User.find({email:decode.email})
    
        const session=randomstring.generate({length:20})

        const sess = new Session({
            sessionToken:session

        })
        let ss;

        await sess.save().then(() => {
            ss = {session:session}
          
          })
          .catch((error) => {
            console.error('Error saving user:', error);
            ss = {err:error}
          });


        console.log(session)
        return await {ss}


    } catch (error) {
        return {err:error}
    }

}







module.exports = {getToken,verify}