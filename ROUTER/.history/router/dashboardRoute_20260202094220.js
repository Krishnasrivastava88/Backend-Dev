import express from'express';
const router =express.Router();

router.get ('/profile',(req,res)=>{
    res.send("profile is running")
})
router.get ('/report',(req,res)=>{
    res.send("report is running")
})
export default router;