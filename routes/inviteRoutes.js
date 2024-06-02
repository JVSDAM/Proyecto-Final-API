const express = require('express')
const ModelInvite = require('../models/inviteModel')
const router = express.Router()

//Post invites
router.post("/invites", async (req, res) => {
    try {
        const results = await ModelInvite.create(req.body)
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get invites
router.get("/invites", async (req, res) => {
    try {
        const results = await ModelInvite.find({})
        if (!results) {F
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get invites por id propia
router.get("/invites/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInvite.findById(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get invites por id del jugador
router.get("/invites/player/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInvite.find({ player_id: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get invites por id del equipo
router.get("/invites/team/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInvite.find({ team_id: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Put invites por id propia
router.put("/invites/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInvite.findByIdAndUpdate(par, req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Delete invites por id
router.delete("/invites/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInvite.findByIdAndDelete(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

module.exports = router