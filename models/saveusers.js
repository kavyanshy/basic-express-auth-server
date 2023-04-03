
const pam = require("../ mongodb")
const User = require("../mongoSchema");
const token = require("./token")


const saveuser = async function saveUsers(email,pass,name){


console.log("anme")





const user1 = new User({
    name: name,
    email:email,
    password: pass
  });
  let ss ;

  await user1.save()
    .then(() => {
      ss = {name:"rer"}
    
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      ss = {err:error}
    });

    const tok = token.getToken({email,pass})

 return await {tok:tok}
}




const replaceStr = () => {
    return [12.,5]
  }
  
module.exports = { saveuser }
