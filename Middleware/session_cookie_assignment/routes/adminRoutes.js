const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.get('/', auth, role('admin'), (req,res)=>res.send("Welcome Admin"));

module.exports = router;