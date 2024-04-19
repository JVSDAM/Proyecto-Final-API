const mongoose = require('mongoose');
const tournamentModel = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        prize: { type: Number },
        admin_id: {},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelTournament = mongoose.model("tournaments", tournamentModel)
module.exports = ModelTournament