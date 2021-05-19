const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path') //requiere el modulo nativo path de node
const app = express()
const port = process.env.PORT || 3001
publicPath = path.join(__dirname, 'public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath)

app.use(express.static(publicPath));

app.listen(port, () => console.log('Servidor corriendo en el puerto 3001'))

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
app.get('/register', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/register.html'))
})
app.get('/login', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/login.html'))
})