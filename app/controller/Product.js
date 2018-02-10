'use strict';
const response = require('./../helper/response');
const ProductService = require('./../services/Product');
const productHelper = require('./../helper/product');
const successConst = require('./../constants/success');
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
            resp.product = product;
            response.success(res, resp);
        }catch(error) {
           //next(error);
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