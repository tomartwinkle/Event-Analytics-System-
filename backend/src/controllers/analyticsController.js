const db = require('../db/db');

exports.getAnalytics = (req, res) => {
    const eventId = req.params.id;

    db.query("CALL get_event_analytics(?)", [eventId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error fetching analytics");
        }
        res.json(result);
    });
};