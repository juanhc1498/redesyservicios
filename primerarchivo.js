const ex = require('express');//llamamos el modulo express
const servidor = ex();//ejecuta el servidor
const http = require('https').Server(servidor);//aplicamos el protocolo http al servidor

servidor.use(ex.static(__dirname + "/publico"));/*el servidor va a usar el modulo express para 
que este presente un contenido estatico a partir de la direccion donde este el "primerarchivo.js"
más la cadena que se le suma para completar la direccion de la carpeta a usar.

nota: solo se esta permitiendo el acceso a los archivos de la carpeta "publico", si hay otra carpeta interna 
esta no tendra permiso para ingresar o usar sus archivos */

servidor.get('/', (req, res) => {
    res.sendFile(__dirname + "/publico/index.html");
});/*cuando el servidor recibe
la peticion get, en su primera direccion o ruta '/' el servidor responde con el archivo "index.html" que esta
dentro de la carpeta "publico"*/

http.listen(8080, () => {
    console.log('hola servidor');
});//inicializa el servidor en el puerto 80 (para este caso)