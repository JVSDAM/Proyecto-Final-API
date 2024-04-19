const mongoose = require('mongoose');
const playerModel = new mongoose.Schema(
    {
        image: { type: String, default: "https://cdn-icons-png.freepik.com/256/1144/1144760.png?ga=GA1.1.750678514.1713177235&" },
        name: { type: String, required: true },
        staff: { type: Boolean, default: false },
        email: { type: String, required: true },
        password: { type: String, required: true },
        description: { type: String, default: "" },
        account: { type: String, default: "" },
        contact: { type: String, default: "" },
        team_id: { type: String, default: "" }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelPlayer = mongoose.model("players", playerModel)
module.exports = ModelPlayer