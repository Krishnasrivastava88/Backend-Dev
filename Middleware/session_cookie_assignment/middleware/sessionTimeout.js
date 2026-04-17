module.exports = (req, res, next) => {
    const now = Date.now();

    if (req.session.lastActivity) {
        const diff = now - req.session.lastActivity;

        if (diff > 5 * 60 * 1000) {
            return res.status(440).send("Session Expired");
        }

        if (diff > 4 * 60 * 1000) {
            res.setHeader("X-Session-Warning", "Session expiring soon");
        }
    }

    req.session.lastActivity = now;
    next();
};