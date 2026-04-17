const express = require('express');
const router = express.Router();
const c = require('../controllers/languageController');

router.post('/set', c.setLanguage);
router.get('/get', c.getLanguage);

module.exports = router;