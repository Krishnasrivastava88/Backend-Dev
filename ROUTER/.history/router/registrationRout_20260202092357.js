import express from'express';
const router =express.Router();

router.get ('/signup',(req,res)=>{
    res.send("sighn")
})
router.get ('/signin',(req,res)=>{
    res.send("User route is working")
})
export default router;