'use strict';
const response = require('./../helper/response');
const ProductService = require('./../services/Product');
const productHelper = require('./../helper/product');
const successConst = require('./../constants/success');
const multer = require('multer');


const Product = {
    index: (req, res, next) => {
        res.status(200).json({
            message: "Customer route is working"
        });
    },




    create: async (req, res, next) => {
        try {
            
            const productService = new ProductService(req.body);
            const product = await productService.create();
            const resp = successConst.CREATED;
            resp.product = product;
            response.success(res, resp);
        }catch(error) {
           console.log(error)
        }
    },
    listProduct: async (req, res, next)=> {
        try {
            console.log("api hit")
            const product = await productHelper.getAllProduct();
            const resp = successConst.OK;
            resp['product'] = product;
            response.success(res, resp);
        }catch(error) {
           //next(error);
           console.log(error)
        }
    },
    listCart: async (req, res, next)=> {
        try {
            
            const product = await productHelper.getAllitems();
            const resp = successConst.OK;
            resp.product = product;
            response.success(res, resp);
            
        }catch(error) {
           //next(error);
           console.log(error)
        }
    },
    viewitem: async (req, res, next)=> {
        try {
            let value = req.param("keyword");
            const product = await productHelper.showitems(value);
            const resp = successConst.OK;
            resp.product = product;
            response.success(res, resp);
            
        }catch(error) {
           //next(error);
           console.log(error)
        }
    },
   
    addtocart: async (req, res, next) => {
        try {
            let orders= {
                product:  req.body._id,
                quantity: req.body.quantity
            }
            const productService = new ProductService();
            const order = await productService.addtocart(orders);
            const resp = successConst.CREATED;
            resp.order = order;
            response.success(res, resp);
        }catch(error) {
           console.log(error)
        }
    },
    placeOrder: async (req, res, next) => {
        try {
            console.log(req.body)
            const productService = new ProductService(req.body);
            const product = await productService.placeorder();
            const resp = successConst.CREATED;
            resp.product = product;
            response.success(res, resp);
        }catch(error) {
           console.log(error)
        }
    },
    // viewCustomers: async (req, res, next)=> {
    //     try {
    //         const customer = await customerHelper.getCustomer(req.params.id);
    //         const resp = successConst.OK;
    //         resp.data.customer = customer;
    //         response.success(res, resp);
    //     }catch(error) {
    //         next(error);
    //     }
    // }
};
module.exports = Product;