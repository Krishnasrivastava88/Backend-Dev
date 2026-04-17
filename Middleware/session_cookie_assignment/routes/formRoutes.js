const express = require('express');
const router = express.Router();
const c = require('../controllers/formController');

router.post('/step1', c.step1);
router.post('/step2', c.step2);
router.post('/submit', c.submit);

module.exports = router;