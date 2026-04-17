const express = require('express');
const router = express.Router();
const c = require('../controllers/cartController');

router.post('/add', c.addToCart);
router.post('/merge', c.mergeCart);

module.exports = router;