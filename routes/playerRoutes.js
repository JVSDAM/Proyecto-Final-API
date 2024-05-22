const express = require('express')
const ModelPlayer = require('../models/playerModel')
const router = express.Router()


//Post players
router.post("/players", async (req, res) => {
    const results = await ModelPlayer.create(req.body)
    res.send(results)
})

//Get players
router.get("/players", async (req, res) => {
    const results = await ModelPlayer.find({})
    res.send({ results })
})

//Get players por nombre
router.get("/players/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelPlayer.find({ name: { $regex: par } })

    res.send({ results })
})

//Get teams por id
router.get("/players/id/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelPlayer.findById(par)

    res.send(results)//Esto tiene que estar sin corchetes porque findById SOLO devuelve un objeto, NUNCA una lista
})

//Get players por email
router.get("/players/email/:par", async (req, res) => {
    const par = req.params.par;
    var results = await ModelPlayer.find({ email: { $eq: par } })

    res.send({ results })
})

//Get players por team_id
router.get("/players/team/:par", async (req, res) => {
    const par = req.params.par;
    var results = await ModelPlayer.find({ team_id: { $eq: par } })

    res.send({ results })
})

//Put players por id
router.put("/players/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelPlayer.findByIdAndUpdate(par, req.body)
    res.send({ results })
})

//Delete players por id
router.delete("/players/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelPlayer.findByIdAndDelete({_id: par})
    res.send({ results })
})

module.exports = router