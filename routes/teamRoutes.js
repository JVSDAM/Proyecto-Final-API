const express = require('express')
const ModelTeam = require('../models/teamModel')
const router = express.Router()


//Post teams
router.post("/teams", async (req, res) => {
    try {
        const results = await ModelTeam.create(req.body)
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get teams
router.get("/teams", async (req, res) => {
    try {
        var results = await ModelTeam.find({})
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get teams por nombre
router.get("/teams/:par", async (req, res) => {
    const par = req.params.par;

    try {
        var results = await ModelTeam.find({ name: { $regex: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get teams por id
router.get("/teams/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        var results = await ModelTeam.findById(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Put teams por id
router.put("/teams/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelTeam.findByIdAndUpdate(par, req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Delete teams por id
router.delete("/teams/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelTeam.findByIdAndDelete({ _id: par })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

module.exports = router