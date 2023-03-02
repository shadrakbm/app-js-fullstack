const { urlencoded } = require('express')
const express = require('express')

const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const port = 5000

const app = express()

//Connexion à la base de données
connectDB()

//Middlewares qui permettent de traiter les données de la requête
app.use(express.json())
app.use(urlencoded({ extended: false }))

//Routes
app.use('/post', require('./routes/post.routes'))

//Lancer le serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' +port))