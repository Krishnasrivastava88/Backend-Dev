exports.addToCart = (req, res) => {
    const item = req.body.item;

    if (req.session.user) {
        req.session.cart = req.session.cart || [];
        req.session.cart.push(item);
    } else {
        let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
        cart.push(item);
        res.cookie("cart", JSON.stringify(cart));
    }

    res.send("Item added");
};

exports.mergeCart = (req, res) => {
    const cookieCart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
    req.session.cart = [...(req.session.cart || []), ...cookieCart];
    res.clearCookie("cart");
    res.send("Cart merged");
};