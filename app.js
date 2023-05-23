const express = require("express")
const app = express();
require('dotenv').config()

//BD Connection
const mongoose = require("mongoose")
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.7wroudf.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('Base de Datos Conectada'))
    .catch(e => console.log(e));

const port = process.env.PORT || 3000;
app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname+"/public"))

//Rutas web
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))


app.use((req, res, next) => {
    res.status(404).render("404",{titulo: "ERROR 404", descripcion: "no hay nada"});
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
});