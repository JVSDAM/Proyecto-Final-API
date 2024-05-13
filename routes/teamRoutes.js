const express = require('express')
const ModelTeam = require('../models/teamModel')
const router = express.Router()


//Post teams
router.post("/teams", async (req, res) => {
    const results = await ModelTeam.create(req.body)
    res.send( results )
})

//Get teams
router.get("/teams", async (req, res) => {

    var results = await ModelTeam.find({})
    res.send({ results })
})

//Get teams por nombre
router.get("/teams/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelTeam.find({ name: { $regex: par } })

    res.send({ results })
})

//Get teams por id
router.get("/teams/id/:par", async (req, res) => {
    const par = req.params.par;

    results = await ModelTeam.findById(par)

    res.send(results)
})

//Put teams por id
router.put("/teams/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelTeam.findByIdAndUpdate(par, req.body)
    res.send({ results })
})

//Delete teams por id
router.delete("/teams/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelTeam.findByIdAndDelete({_id: par})
    res.send( results )
})

module.exports = router