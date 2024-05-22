const mongoose = require('mongoose');
const inviteModel = new mongoose.Schema(
    {
        team_id: { type: String, required: true  },
        player_id: { type: String, required: true  }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelInvite = mongoose.model("invite", inviteModel)
module.exports = ModelInvite