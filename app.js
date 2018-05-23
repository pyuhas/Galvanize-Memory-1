const express = require('express');
const app = express();
const knex = require('./database-connection');
const bodyParser = require('body-parser');
const resolutions = require('./routes/resolutions');
const morgan = require('morgan')

//This needs to be above your routes
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/resolutions', resolutions);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
