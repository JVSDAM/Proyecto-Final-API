const express = require('express')
const ModelInvite = require('../models/inviteModel')
const router = express.Router()

//Post invites
router.post("/invites", async (req, res) => {
    const results = await ModelInvite.create(req.body)
    res.send(results)
})

//Get invites
router.get("/invites", async (req, res) => {
    const results = await ModelInvite.find({})
    res.send(results)
})

//Get invites por id propia
router.get("/invites/id/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInvite.findById(par)

    res.send(results)//Esto tiene que estar sin corchetes porque findById SOLO devuelve un objeto, NUNCA una lista
})

//Get invites por id del jugador
router.get("/invites/player/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInvite.find({ player_id: { $eq: par } })

    res.send({ results })
})

//Get invites por id del equipo
router.get("/invites/team/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInvite.find({ team_id: { $eq: par } })

    res.send({ results })
})

//Put invites por id propia
router.put("/invites/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelInvite.findByIdAndUpdate(par, req.body)
    res.send(results)
})

//Delete invites por id
router.delete("/invites/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelInvite.findByIdAndDelete(par)
    res.send(results)
})

module.exports = router