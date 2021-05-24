const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path') //requiere el modulo nativo path de node
const app = express()
const port = process.env.PORT || 3001
const rutaMain= require('./src/routes/main')
publicPath = path.join(__dirname, 'public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath)
app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.listen(port, () => console.log('Servidor corriendo en el puerto 3001'))

app.use('/',rutaMain);


