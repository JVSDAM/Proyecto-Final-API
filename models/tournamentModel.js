const mongoose = require('mongoose');
const tournamentModel = new mongoose.Schema(
    {
        image: { type: String, default: "https://cdn-icons-png.freepik.com/256/1144/1144760.png?ga=GA1.1.750678514.1713177235&" },
        name: { type: String, required: true },
        description: { type: String, default: "" },
        prize: { type: String, default: "No prize" },
        admin_id: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelTournament = mongoose.model("tournaments", tournamentModel)
module.exports = ModelTournament