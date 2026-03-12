import express from 'express';
const router = express.Router();

const authMiddleware = (req, res, next) => {
    const token = req.query.token;

    if (token === "admin123") {
        next();
    } else {
        res.send("access denied")
    }
};

router.get('/signup', (req, res) => {
    res.send("signup is running");
});

router.get('/login', authMiddleware, (req, res) => {
    res.send("login is running");
});

export default router;
