const mongoose = require('mongoose');
const inscriptionModel = new mongoose.Schema(
    {
        team_id: { type: String, required: true },
        tournament_id: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelInscription = mongoose.model("inscription", inscriptionModel)
module.exports = ModelInscription