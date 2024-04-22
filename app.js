const express = require('express')
/*var fs = require('fs');
var multer = require('multer');*/
const dbconnect = require('./config')
const ModelPlayer = require('./models/playerModel')
const ModelTeam = require('./models/teamModel')
const ModelTournament = require('./models/tournamentModel')
const ModelMatch = require('./models/matchModel')
const app = express()

const router = express.Router()

//------------------------------------------------------------------ PLAYERS ------------------------------------------------------------------
//Post players
router.post("/players", async (req, res) => {
    const respuesta = await ModelPlayer.create(req.body)
    res.send(respuesta)
})

//Get players
router.get("/players", async (req, res) => {
    const results = await ModelPlayer.find({})
    res.send({ results })
})

//Get players por id
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

//Put players por nombre o id
router.put("/players/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const results = await ModelPlayer.findByIdAndUpdate(par, req.body)
        res.send({ results })
    } else {
        const results = await ModelPlayer.findOneAndUpdate({ name: { $eq: par } }, req.body)
        res.send({ results })
    }
})

//Delete players por nombre o id
router.delete("/players/:par", async (req, res) => {
    const par = req.params.par;
    
    if (par.length == 24) {
        const results = await ModelPlayer.findByIdAndDelete({_id: par})
        res.send({ results })
    } else {
        const results = await ModelPlayer.deleteOne({ name: { $eq: par } })
        res.send({ results })
    }
})


//------------------------------------------------------------------ TEAMS ------------------------------------------------------------------
//Post teams
router.post("/teams", async (req, res) => {
    const results = await ModelTeam.create(req.body)
    res.send({ results })
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

//Put teams por nombre o id
router.put("/teams/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const results = await ModelTeam.findByIdAndUpdate(par, req.body)
        res.send({ results })
    } else {
        const results = await ModelTeam.findOneAndUpdate({ name: { $eq: par } }, req.body)
        res.send({ results })
    }
})

//Delete teams por nombre o id
router.delete("/teams/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelTeam.deleteOne(par)
        res.send(respuesta)
    } else {
        const respuesta = await ModelTeam.deleteOne({ name: { $eq: par } })
        res.send(respuesta)
    }
})


//------------------------------------------------------------------ TOURNAMENTS ------------------------------------------------------------------
//Post tournaments
router.post("/tournaments", async (req, res) => {
    const results = await ModelTournament.create(req.body)
    res.send({ results })
})

//Get players
router.get("/tournaments", async (req, res) => {
    const results = await ModelTournament.find({})
    res.send({ results })
})

//Get players por id
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

//Put tournaments por nombre o id
router.put("/tournaments/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelTournament.findByIdAndUpdate(par, req.body)
        res.send(respuesta)
    } else {
        const respuesta = await ModelTournament.findOneAndUpdate({ name: { $eq: par } }, req.body)
        res.send(respuesta)
    }
})

//Delete tournaments por nombre o id
router.delete("/tournaments/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelTournament.deleteOne(par)
        res.send(respuesta)
    } else {
        const respuesta = await ModelTournament.deleteOne({ name: { $eq: par } })
        res.send(respuesta)
    }
})

//------------------------------------------------------------------ MATCHES ------------------------------------------------------------------
//Post matches
router.post("/matches", async (req, res) => {
    const respuesta = await ModelMatch.create(req.body)
    res.send(respuesta)
})

//Get matches
router.get("/matches", async (req, res) => {
    const respuesta = await ModelMatch.find({})
    res.send(respuesta)
})

//Get matches por id propia o de uno de los equipos
router.get("/matches/:par", async (req, res) => {
    const par = req.params.par;
    if (par.length == 24) {
        const respuesta = await ModelMatch.findById(par)

        if (respuesta == null) {//respuesta esta sin inicializar aqui asi que esta forma de hacerlo no funciona
            console.log("Cuasi res para el cos")
            const respuesta = await ModelMatch.find({ team1_id: { $eq: par } })
            console.log("Cuasi res para el cos1")

            if (respuesta == null) {
                const respuesta = await ModelMatch.find({ team2_id: { $eq: par } })
                console.log("Cuasi res para el cos2")
            }
        }
        res.send(respuesta)
    }
})

//Put matches por id propia
router.put("/matches/:par", async (req, res) => {
    const par = req.params.par;
    const respuesta = await ModelMatch.findByIdAndUpdate(par, req.body)
    res.send(respuesta)
})

//Delete matches por nombre o id
router.delete("/matches/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelMatch.deleteOne(par)
        res.send(respuesta)
    } else {
        const respuesta = await ModelMatch.deleteOne({ name: { $eq: par } })
        res.send(respuesta)
    }
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