const { response } = require('express');
global.XMLHttpRequest = require('xhr2');
 
var xhr = new XMLHttpRequest();

const getMessage = async(req, res = response ) => {
   
    const mensaje = `Request a  ${req.baseUrl} , ${Date.now()}`

 
    try {
    
        res.status(200).json({
            ok: true,
            message: "message: 'Este request/response está OK'"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            error: error
        });
    }
    console.log(mensaje);
}


 
const getTiempo = async(req, res = response ) => {
   const url = 'https://www.el-tiempo.net/api/json/v2/provincias/50/municipios/50297';
   xhr.open('GET', url, true);
    xhr.send();
    
    xhr.overrideMimeType("application/json");  
    xhr.onload = function () {

        if (xhr.status >= 200 && xhr.status < 300) {
            
            tiempo=JSON.parse(xhr.response);
            
            const salida = {
                municipio: tiempo.municipio.NOMBRE,
                fecha: tiempo.fecha,
                temperaturaActual: tiempo.temperatura_actual,
                temperaturaMin: tiempo.temperaturas.min,
                temperaturaMinMax: tiempo.temperaturas.max

            };
            outResponse(req, res,salida);
             
        } else {

            console.log('la peticion a la API de el-tiempo es fallida');
        }};



}
const outResponse = async(req, res = response, respuesta ) => {
     try {
    
        res.status(200).json(respuesta);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            error: error
        });
    }
}



module.exports = {
    getMessage,
    getTiempo
}