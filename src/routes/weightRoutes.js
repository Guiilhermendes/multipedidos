// src/routes/weightRoutes.js
const express = require('express');
const weightController = require('../controllers/weightController');

const router = express.Router();

router.get('/weights', weightController.getWeights);

module.exports = router;
