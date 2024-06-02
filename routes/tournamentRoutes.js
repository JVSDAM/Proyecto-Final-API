const express = require('express')
const ModelTournament = require('../models/tournamentModel')
const router = express.Router()


//Post tournaments
router.post("/tournaments", async (req, res) => {
    try {
        const results = await ModelTournament.create(req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get tournaments
router.get("/tournaments", async (req, res) => {
    try {
        const results = await ModelTournament.find({})
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get tournaments por nombre
router.get("/tournaments/:par", async (req, res) => {
    const par = req.params.par

    try {
        const results = await ModelTournament.find({ name: { $regex: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get tournaments por id
router.get("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par

    try {
        const results = await ModelTournament.findById(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Put tournaments por id
router.put("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par

    try {
        const results = await ModelTournament.findByIdAndUpdate(par, req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Delete tournaments por id
router.delete("/tournaments/id/:par", async (req, res) => {
    const par = req.params.par

    try {
        const results = await ModelTournament.findByIdAndDelete({ _id: par })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

module.exports = router