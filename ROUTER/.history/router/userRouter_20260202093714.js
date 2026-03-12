import express from 'express';
const router = express.Router();


router.get('/', logging, (req, res) => {
    res.send("Server is running");
});

router.get('/user', (req, res) => {
    res.send("User route is working");
});

export default router;
