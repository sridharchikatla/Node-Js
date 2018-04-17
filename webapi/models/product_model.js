// database model using mongoose orm

var mongoose = require("mongoose");

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var ProductSchema = mongoose.Schema({
    productId:Number,
    productName:String,
    productDesc:String,
    productImage:String,
    productIsOnsale:Boolean,
    productPrice:Number
});

module.exports = mongoose.model('Product', ProductSchema);