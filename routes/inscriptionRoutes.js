const express = require('express')
const ModelInscription = require('../models/inscriptionModel')
const router = express.Router()

//Post inscriptions
router.post("/inscriptions", async (req, res) => {
    try {
        const results = await ModelInscription.create(req.body)
        res.send(results)
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear la inscripción');
    }
})

//Get inscriptions
router.get("/inscriptions", async (req, res) => {
    try {
        const results = await ModelInscription.find({})
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get inscriptions por id propia
router.get("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInscription.findById(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get inscriptions por id del torneo
router.get("/inscriptions/tournament/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInscription.find({ tournament_id: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Get inscriptions por id del equipo
router.get("/inscriptions/team/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInscription.find({ team_id: { $eq: par } })
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send({ results })
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Put inscriptions por id propia
router.put("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInscription.findByIdAndUpdate(par, req.body)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

//Delete inscriptions por id
router.delete("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;

    try {
        const results = await ModelInscription.findByIdAndDelete(par)
        if (!results) {
            return res.status(404).send({ message: "Not Found" })
        }
        res.send(results)
    } catch (error) {
        res.status(500).send({ message: "Internal Error", error: error.message })
    }
})

module.exports = router