exports.step1 = (req, res) => {
    req.session.formData = { ...req.session.formData, name: req.body.name };
    res.send("Step 1 saved");
};

exports.step2 = (req, res) => {
    req.session.formData = { ...req.session.formData, email: req.body.email };
    res.send("Step 2 saved");
};

exports.submit = (req, res) => {
    const data = req.session.formData;
    req.session.formData = null;
    res.json(data);
};