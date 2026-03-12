import express from 'express';
const router = express.Router();

// Authorization Middleware
const authMiddleware = (req, res, next) => {
    const token = req.query.token;

    if (token === "admin123") {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

router.get('/signup', (req, res) => {
    res.send("signup is running");
});

router.get('/login', (req, res) => {
    res.send("login is running");
});

router.get('/profile', authMiddleware, (req, res) => {
    res.send("Profile is accessible only with correct token");
});

export default router;
