const { default: mongoose } = require("mongoose")

const Pame = mongoose.connect("mongodb://127.0.0.1/name",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{console.log("connected")}).catch((error) => {
  console.error('Error connecting to database:', error);
});

module.exports = Pame;