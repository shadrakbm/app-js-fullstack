const express = require("express")
const cors = require("cors")

const { urlencoded } = require("express")

const connectDB = require("./config/db")
const UserModel = require("./models/user.model")

//Besoin d'un fichier .env pour mot de passe MongoDB
const dotenv = require("dotenv").config()

const app = express()

//Connexion à la base de données avec MongoDB
connectDB()

app.use(cors())

//Middlewares qui permettent de traiter les données de la requête (avec Postman ici en l'occurence)
app.use(express.json())
app.use(urlencoded({ extended: false }))

//Lier l'authentification côté frontend au backend
app.post("/api/register", (req, res) => {
    console.log(req.body)
    res.json({ status: "ok" })
})
app.post("/api/login", async (req, res) => {
    const user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        return res.json({ status: "ok", user: true })
    }
    return res.json({ status: "error", user: false })
})

//Routes
app.use("/post", require("./routes/post.routes"))
app.use("/user", require("./routes/user.routes"))

module.exports = app