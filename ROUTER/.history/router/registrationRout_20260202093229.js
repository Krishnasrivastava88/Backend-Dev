import express from'express';
const router =express.Router();

router.get ('/signup',(req,res)=>{
    res.send("signup is running")
})
router.get ('/login',(req,res)=>{
    res.send("signin is running")
})
export default router;