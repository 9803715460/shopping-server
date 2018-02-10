'use strict';
const Product = require('./../models/Product');
const errorConst = require('./../constants/error');
module.exports = class product {
    constructor(product) {
        this.product = product;
        
    }
    async create() {
        try {
             let pro = new Product(this.product);
			await	pro.save();
        
            return pro;
        } 
        catch(error) {
            throw error;
        }
    }
};