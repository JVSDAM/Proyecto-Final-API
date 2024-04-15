const mongoose = require('mongoose');
const playerModel = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        image:{
            type: String,
            default: "https://cdn-icons-png.freepik.com/256/1144/1144760.png?ga=GA1.1.750678514.1713177235&"
        }, 
        account: {type: String},
        staff: {type: Boolean, default: false},
        team_id: {}//Como referencio la id de otro item?????
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelPlayer = mongoose.model("players", playerModel)
module.exports = ModelPlayer