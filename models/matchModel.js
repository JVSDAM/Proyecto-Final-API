const mongoose = require('mongoose');
const matchModel = new mongoose.Schema(
    {
        tournament_id: {},
        team1_id: {},
        team2_id: {},
        teamwin_id: {}//Si esto esta vacio el partido no se ha jugado
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelMatch = mongoose.model("matches", matchModel)
module.exports = ModelMatch