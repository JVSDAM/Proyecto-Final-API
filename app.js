const express = require('express')
/*var fs = require('fs');
var multer = require('multer');*/
const dbconnect = require('./config')

const bodyParser = require('body-parser');

const playerRoutes = require('./routes/playerRoutes')
const teamRoutes = require('./routes/teamRoutes')
const tournamentRoutes = require('./routes/tournamentRoutes')
const inscriptionRoutes = require('./routes/inscriptionRoutes')
const inviteRoutes = require('./routes/inviteRoutes')

const app = express()
const router = express.Router()

app.use(bodyParser.json());
app.use(playerRoutes)
app.use(teamRoutes)
app.use(tournamentRoutes)
app.use(inscriptionRoutes)
app.use(inviteRoutes)

app.use((error, req, res, next) => {
    res.status(400)
    console.log(error.message)
})

app.use(express.json())
app.use(router)
app.listen(3001, () => {
    console.log("El servidor esta listo en el puerto 3001")
})

dbconnect(); 