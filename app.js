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
    /*var array = []
    const respuesta = await ModelPlayer.find({})
    for(var e of respuesta){
        array.push(e)
    }
    res.send(array)*/

    const respuesta = await ModelPlayer.find({})
    res.send(respuesta)
})

//Get players por nombre o id
router.get("/players/:par", async (req, res) => {
    const par = req.params.par;
    var respuesta = ""
    if (par.length == 24) {
        respuesta = await ModelPlayer.findById(par)

    } else {
        //respuesta = await ModelPlayer.findOne({ name: {$eq: par}})

        respuesta = await ModelPlayer.find({ name: { $regex: par } })
    }
    res.send(respuesta)
})

//Get players por nombre contains par
/*router.get("/players/:par", async (req, res) => {
    const par = req.params.par;
    var respuesta = await ModelPlayer.find({name : {$regex : par}})
    
    res.send(respuesta)
})*/

//Put players por nombre o id
router.put("/players/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelPlayer.findByIdAndUpdate(par, req.body)
        res.send(respuesta)
    } else {
        const respuesta = await ModelPlayer.findOneAndUpdate({ name: { $eq: par } }, req.body)
        res.send(respuesta)
    }
})

//Delete teams por nombre o id
router.delete("/players/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelPlayer.deleteOne(par)
        res.send(respuesta)
    } else {
        const respuesta = await ModelPlayer.deleteOne({ name: { $eq: par } })
        res.send(respuesta)
    }
})


//------------------------------------------------------------------ TEAMS ------------------------------------------------------------------
//Post teams
router.post("/teams", async (req, res) => {
    const respuesta = await ModelTeam.create(req.body)
    res.send(respuesta)
})

//Get teams
router.get("/teams", async (req, res) => {

    var respuesta = await ModelTeam.find({})
    res.send(respuesta)
})

//Get teams por nombre o id
router.get("/teams/:par", async (req, res) => {
    const par = req.params.par;
    if (par.length == 24) {
        const respuesta = await ModelTeam.findById(par)
        res.send(respuesta)
    } {
        const respuesta = await ModelTeam.findOne({ name: { $eq: par } })
        res.send(respuesta)
    }
})

//Put teams por nombre o id
router.put("/teams/:par", async (req, res) => {
    const par = req.params.par;

    if (par.length == 24) {
        const respuesta = await ModelTeam.findByIdAndUpdate(par, req.body)
        res.send(respuesta)
    } else {
        const respuesta = await ModelTeam.findOneAndUpdate({ name: { $eq: par } }, req.body)
        res.send(respuesta)
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
    const respuesta = await ModelTournament.create(req.body)
    res.send(respuesta)
})

//Get tournaments
router.get("/tournaments", async (req, res) => {
    const respuesta = await ModelTournament.find({})
    res.send(respuesta)
})

//Get tournaments por nombre o id
router.get("/tournaments/:par", async (req, res) => {
    const par = req.params.par;
    if (par.length == 24) {
        const respuesta = await ModelTournament.findById(par)
        res.send(respuesta)
    } {
        const respuesta = await ModelTournament.findOne({ name: { $eq: par } })
        res.send(respuesta)
    }
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