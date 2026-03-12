import express from'express';
const router =express.Router();

router.get ('/signup',(req,res)=>{
    res.send("server is running")
})
router.get ('/u',(req,res)=>{
    res.send("User route is working")
})
export default router;