const express = require('express')
/*var fs = require('fs');
var multer = require('multer');*/
const dbconnect = require('./config')
const ModelPlayer = require('./models/playerModel')
const ModelTeam = require('./models/teamModel')
const ModelTournament = require('./models/tournamentModel')
const ModelInscription = require('./models/inscriptionModel')
const ModelInvite = require('./models/inviteModel')
const app = express()

const router = express.Router()

//------------------------------------------------------------------ PLAYERS ------------------------------------------------------------------
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

//Put players por nombre o id
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


//------------------------------------------------------------------ TEAMS ------------------------------------------------------------------
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


//------------------------------------------------------------------ TOURNAMENTS ------------------------------------------------------------------
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

//------------------------------------------------------------------ INSCRIPTIONS ------------------------------------------------------------------
//Post inscriptions
router.post("/inscriptions", async (req, res) => {
    const results = await ModelInscription.create(req.body)
    res.send(results)
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

//Delete inscriptions por nombre o id
router.delete("/inscriptions/id/:par", async (req, res) => {
    const par = req.params.par;
    const results = await ModelInscription.findByIdAndDelete(par)
    res.send(results)
})


/*app.use(multer({dest: './uploads/',
    rename: function (fieldname, filename){
        return filename
    }
}))*/

/*router.post('/players/:par/photo',function(req,res){
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = 'image/png';
    newItem.save();
});*/

app.use(express.json())
app.use(router)
app.listen(3001, () => {
    console.log("El servidor esta listo en el puerto 3001")
})

dbconnect(); 