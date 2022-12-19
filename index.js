
var bodyParser = require('body-parser')
require('dotenv').config();
const express = require('express');
const app = express();

// Directorio Público
app.use( express.static('public') );

// Rutas
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/apinodePrueba', require('./routes/routes') );



app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






