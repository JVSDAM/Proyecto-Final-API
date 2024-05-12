const mongoose = require('mongoose');
const inviteModel = new mongoose.Schema(
    {
        team_id: {},
        player_id: {}
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelInvite = mongoose.model("invite", inviteModel)
module.exports = ModelInvite