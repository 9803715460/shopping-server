'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoute = require('./routes/product');
const errorConst = require('./constants/error');
mongoose.Promise = global.Promise;
require('dotenv').load();
mongoose.connect(process.env.DB, {
   // useMongoClient: true
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
   next();
});
app.use('/api/product', productRoute);
app.use((req, res, next) => {
    let error = new Error();
    error = errorConst.ROUTE_NOT_FOUND;
    next(error);
});
app.use((error, req, res, next) => {
    if(error.name === 'ValidationError')
        error = errorConst.NOT_ACCEPTABLE;
    if (app.get('env') !== 'development')
        error.stack = null;
    response.error(res, error);
});
module.exports = app;