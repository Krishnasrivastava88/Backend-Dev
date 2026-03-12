import express from'express';
const router =express.Router();

router.get ('/signup',(req,res)=>{
    res.send("signup is running")
})
router.get ('/login',(req,res)=>{
    res.send("login is running")
})
const func=(req,res,next)=>{
    console.log("this is middleware for registration");
    next();
}
router.use(func);
export default router;