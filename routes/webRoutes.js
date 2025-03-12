const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

module.exports = router;
