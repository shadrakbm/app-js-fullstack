const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    profilePic: {
        type: String,
        default: "/images/profilePic.png"
    }
})

module.exports = mongoose.model("user", userSchema)