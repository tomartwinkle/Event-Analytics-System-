const db = require('../db/db');

exports.submitResponse = (req, res) => {
    const { user_id, event_id } = req.body;

    const sql = "INSERT INTO submissions(user_id, event_id) VALUES (?, ?)";

    db.query(sql, [user_id, event_id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Submission failed");
        }
        res.send("Submission successful");
    });
};