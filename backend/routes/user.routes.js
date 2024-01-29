const express = require("express")
const { getUser } = require("../controllers/user.controllers")

const router = express.Router()

router.get("/", getUser)

module.exports = router