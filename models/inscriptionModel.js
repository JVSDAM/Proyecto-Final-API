const mongoose = require('mongoose');
const inscriptionModel = new mongoose.Schema(
    {
        team_id: {},
        tournament_id: {}
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelInscription = mongoose.model("inscription", inscriptionModel)
module.exports = ModelInscription