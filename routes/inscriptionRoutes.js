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
    const results = await ModelInscription.find({})
    res.send(results)
})

//Get inscriptions por id propia
router.get("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInscription.findById(par)

    res.send(results)//Esto tiene que estar sin corchetes porque findById SOLO devuelve un objeto, NUNCA una lista
})

//Get inscriptions por id del torneo
router.get("/inscriptions/tournament/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInscription.find({ tournament_id: { $eq: par } })

    res.send({ results })
})

//Get inscriptions por id del equipo
router.get("/inscriptions/team/:par", async (req, res) => {
    const par = req.params.par;
    var results = ""

    results = await ModelInscription.find({ team_id: { $eq: par } })

    res.send({ results })
})

//Put inscriptions por id propia
router.put("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelInscription.findByIdAndUpdate(par, req.body)
    res.send(results)
})

//Delete inscriptions por id
router.delete("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelInscription.findByIdAndDelete(par)
    res.send(results)
})

module.exports = router