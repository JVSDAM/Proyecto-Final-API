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