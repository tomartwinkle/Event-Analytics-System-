const express = require('express');
const router = express.Router();

const { submitResponse } = require('../controllers/submissionController');

router.post('/', submitResponse);

module.exports = router;