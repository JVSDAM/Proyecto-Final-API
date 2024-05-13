const express = require('express')
const ModelTournament = require('../models/tournamentModel')
const router = express.Router()


//Post tournaments
router.post("/tournaments", async (req, res) => {
    const results = await ModelTournament.create(req.body)
    res.send( results )
})

//Get tournaments
router.get("/tournaments", async (req, res) => {
    const results = await ModelTournament.find({})
    res.send({ results })
})

//Get tournaments por nombre
router.get("/tournaments/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelTournament.find({ name: { $regex: par } })

    res.send({ results })
})

//Get tournaments por id
router.get("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelTournament.findById(par)

    res.send(results)//Esto tiene que estar sin corchetes porque findById SOLO devuelve un objeto, NUNCA una lista
})

//Put tournaments por id
router.put("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelTournament.findByIdAndUpdate(par, req.body)
    res.send({ results })
})

//Delete tournaments por id
router.delete("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelTournament.findByIdAndDelete({_id: par})
    res.send( results )
})

module.exports = router