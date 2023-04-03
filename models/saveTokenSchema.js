const { default: mongoose } = require("mongoose");

const userSch = new mongoose.Schema({
    sessionToken:{
        type:String},
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const Session = mongoose.model("sessions",userSch)

module.exports = Session