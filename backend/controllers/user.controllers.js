const UserModel = require("../models/user.model")

module.exports.getUser = async (req, res) => {
    const user = await UserModel.findOne({ username: req.body.username })
    res.status(200).json(user)
}