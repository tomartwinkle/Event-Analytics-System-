const express = require('express');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/events', eventRoutes);
app.use('/submit', submissionRoutes);
app.use('/analytics', analyticsRoutes);

module.exports = app;