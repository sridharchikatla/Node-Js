 //lodash that collection api for processing data 
// model 
var lodash = require('lodash');
var ProductModel = require('../models/product_model.js');


//module exports 
module.exports = function(app){
    /***CREATE  -POST*/ 
    app.post('/addProduct',function(request,response){
        //custom orm mongoose code  or sequelize orm code for database operations
        var newProduct = new ProductModel(request.body);
        newProduct.save(function (err) {
            if (err) {
                response.json({
                    info: "Error::Product Creation", error: err
                });
            };
            response.json({
                info: "Product created Successfully"
            });
        });
    });

    /***READALL -GET */
    app.get('/getAllproducts',function(request,response){
        ProductModel.find(function (err, ProductModels) {
            if (err) {
                response.json({ info: 'error during find Bank', error: err });
            };

            response.json({ ProductModels: ProductModels });
        });
    });

    /***READBYID -GET/{id}*/
    app.get('/getProducts/:productId',function(request,response){
        ProductModel.findById(request.params.productId, function (err, ProductModel) {
            if (err) {
                response.json({ info: 'error during find Product', error: err });
            };
            if (ProductModel) {

                setTimeout(function () {
                    response.json({ info: 'Product found successfully', data: ProductModel });
                }, 10000);
            } else {
                response.json({ info: 'Product not found' });
            }
        });
    });

    /***UPDATE -PUT*/
    app.put('/updateProduct/:productId',function(request,response){
        ProductModel.findById(request.params.productId, function (err,ProductModel) {
            if (err) {
                response.json({ info: 'error during find Product', error: err });
            };
            if (ProductModel) {
                _.merge(ProductModel, request.body);
                ProductModel.save(function (err) {
                    if (err) {
                        response.json({ info: 'error during Product update', error: err });
                    };
                    response.json({ info: 'Product updated successfully' });
                });
            } else {
                response.json({ info: 'Product not found' });
            }

        });
    });

    /***DELETE -DELETE*/
    app.delete('/deleteProduct/:productId',function(request,response){
        ProductModel.findByIdAndRemove(request.params.productId, function (err) {
            if (err) {
                response.json({ info: 'error during remove Product', error: err });
            };
            response.json({ info: 'Product removed successfully' });
        });
    });
};