'use strict';
const Product = require('./../models/Product');
const Order = require('./../models/order');
const placeOrder = require('./../models/placeorder');
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
    async addtocart(orders){
        
        let order = new Order(orders)
        await order.save();
        return order

    }
    async placeorder(){
        
        try { 
            let order = new placeOrder(this.product);
            //console.log(order)
            await order.save();
            return order;
       } 
       catch(error) {
           throw error;
       }
    }
    
};