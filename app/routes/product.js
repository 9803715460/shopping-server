'use strict';
const express = require('express');
const router = express.Router();
const ProductController = require('./../controller/Product');
router.get('/', ProductController.index);
router.post('/create',  ProductController.create);
router.get('/list',  ProductController.listProduct);
//router.get('/view/:id', ProductController.viewProduct);
module.exports = router;