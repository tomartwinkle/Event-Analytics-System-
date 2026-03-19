const db = require('../db/db');

exports.createEvent = (req, res) => {
    const { title, deadline } = req.body;

    const sql = "INSERT INTO events(title, deadline, created_by) VALUES (?, ?, 1)";

    db.query(sql, [title, deadline], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error creating event");
        }
        res.send("Event Created");
    });
};

exports.getEvents = (req, res) => {
    db.query("SELECT * FROM events", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
};