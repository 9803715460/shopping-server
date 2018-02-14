
'use strict';
const express = require('express');
const multer = require('multer');
const router = express.Router();
const ProductController = require('./../controller/Product');
router.get('/', ProductController.index);

router.get('/list',  ProductController.listProduct);
router.post('/addtocart', ProductController.addtocart);
router.get('/viewcart', ProductController.listCart);
router.post('/placeorder', ProductController.placeOrder);
router.post('/showitem', ProductController.viewitem)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  router.post('/create', upload.single('productImage'),  ProductController.create);

module.exports = router;
