'use strict';
const mongoose = require('mongoose');
const Product = require('./../models/Product');
const customer = {
    isValidEmail: (email) => {
        let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
        if(emailRegex.test(email))
            return true
        return false;
    },
    isEmailExist: async (email) => {
        const customer = await Customer.findOne({email: email});
        if(customer)
            return customer;
        return false;
    },
    getAllProduct: async () => {
        return await Product.find({});
        
    },
    getCustomer: async (id) => {
        if(mongoose.Types.ObjectId.isValid(id))
            return await Customer.findById(id);
        return null;
    }
};
module.exports = customer;