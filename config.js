const mongoose = require('mongoose')
const urlMongo = "mongodb+srv://dragonazulaco:vNEpsf0foiUXzVW9@cluster0.uvznnot.mongodb.net/teams3c"
const dbconnect = () => {
    mongoose.connect(urlMongo, {})
}
module.exports = dbconnect