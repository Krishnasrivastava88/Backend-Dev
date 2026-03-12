import express from'express';
const router =express.Router();

router.get ('/signup',(req,res)=>{
    res.send("signup is running")
})
router.get ('/signin',(req,res)=>{
    res.send("signin is running")
})
export default router;