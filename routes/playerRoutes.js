const express = require('express')
const ModelPlayer = require('../models/playerModel')
const router = express.Router()


//Post players
router.post("/players", async (req, res) => {
    try {
        const results = await ModelPlayer.create(req.body)
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get players
router.get("/players", async (req, res) => {
    try {
        const results = await ModelPlayer.find({})
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get players por nombre
router.get("/players/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelPlayer.find({ name: { $regex: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get players por id
router.get("/players/id/:par", async (req, res) => {
    const par = req.params.par

    try {
        const results = await ModelPlayer.findById(par)
        if (!results) {
            return res.status(404).send({ message: "Jugador no encontrado" })
        }
        res.send(results)//Esto tiene que estar sin corchetes porque findById SOLO devuelve un objeto, NUNCA una lista
    } catch (error) {
        res.status(500).send({ message: "Error al buscar el jugador", error: error.message })
    }
})

//Get players por email
router.get("/players/email/:par", async (req, res) => {
    const par = req.params.par;

    try {
        var results = await ModelPlayer.find({ email: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get players por team_id
router.get("/players/team/:par", async (req, res) => {
    const par = req.params.par;

    try {
        var results = await ModelPlayer.find({ team_id: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Put players por id
router.put("/players/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelPlayer.findByIdAndUpdate(par, req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Delete players por id
router.delete("/players/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelPlayer.findByIdAndDelete({ _id: par })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

module.exports = router