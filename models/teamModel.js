const mongoose = require('mongoose');
const teamModel = new mongoose.Schema(
    {
        image: { type: String, default: "https://cdn-icons-png.freepik.com/256/1144/1144760.png?ga=GA1.1.750678514.1713177235&" },
        name: { type: String, required: true },
        description: { type: String },
        admin_id: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelTeam = mongoose.model("teams", teamModel)
module.exports = ModelTeam