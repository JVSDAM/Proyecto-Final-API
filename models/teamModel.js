const mongoose = require('mongoose');
const teamModel = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        tournaments_id: {},
        admin_id: {}
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelTeam = mongoose.model("teams", teamModel)
module.exports = ModelTeam