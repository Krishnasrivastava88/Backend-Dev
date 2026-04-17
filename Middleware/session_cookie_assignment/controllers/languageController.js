exports.setLanguage = (req, res) => {
    res.cookie("lang", req.body.lang, { maxAge: 7*24*60*60*1000 });
    res.send("Language set");
};

exports.getLanguage = (req, res) => {
    res.send(req.cookies.lang || "en");
};