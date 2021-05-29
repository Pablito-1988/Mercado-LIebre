const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path') //requiere el modulo nativo path de node
const app = express()
const port = process.env.PORT || 3001
const rutaMain= require('./routes/main')
const rutaUser=require('./routes/user')

publicPath = path.join(__dirname, '../public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
app.set('views', path.join(__dirname, 'views'))
/* console.log(publicPath) */
app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.listen(port, () => console.log('Servidor corriendo en el puerto 3001'))

//empiezan las rutas 

app.use('/',rutaMain);
app.use('/',rutaUser)






 