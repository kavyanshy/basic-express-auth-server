const { default: mongoose } = require("mongoose");

const userSch = new mongoose.Schema({

    name:{
        type:String
    },
    email: {
        type: String,
       
      },
      password: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const User = mongoose.model("Users",userSch)

module.exports = User