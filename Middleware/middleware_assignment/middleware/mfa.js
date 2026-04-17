const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const otp = req.headers['x-otp'];

    if (!token || !otp) return res.status(401).json({ msg: "Token & OTP required" });

    try {
        jwt.verify(token, "secret");
        if (otp !== "123456") return res.status(403).json({ msg: "Invalid OTP" });
        next();
    } catch {
        res.status(401).json({ msg: "Invalid Token" });
    }
};