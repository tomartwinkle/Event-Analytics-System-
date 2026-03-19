const express = require('express');
const router = express.Router();

const { createEvent, getEvents } = require('../controllers/eventController');

router.post('/create', createEvent);
router.get('/', getEvents);
router.get('/users', (req, res) => {
  db.query("SELECT user_id, name FROM users", (err, result) => {
    res.json(result);
  });
});
module.exports = router;