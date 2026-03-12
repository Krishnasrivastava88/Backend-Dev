import express from'express';
const router =express.Router();
router.get ('/',(req,res){
    res.send("User route is working")
})
router.get ('/user',(req,res){
    res.send("User route is working")
})