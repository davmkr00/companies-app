const express = require('express');
const companiesRoutes = require('./routes/companies.routes');

const app = express();
app.use(express.json());

app.use('/', companiesRoutes);


module.exports = app;