const express = require("express")
const { 
    getPosts, 
    setPost, 
    editPost,
    deletePost,
    likePost,
    dislikePost } = require("../controllers/post.controllers")

const router = express.Router()

router.get("/", getPosts)
router.post("/", setPost)
router.put("/:id", editPost)
router.delete("/:id", deletePost)
router.patch("/like-post/:id", likePost)
router.patch("/dislike-post/:id", dislikePost)

module.exports = router