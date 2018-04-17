// create instance of express for middleware 
// create instance of bodyparser for rest query 
// create http server to render the middleware components. 
// bind the http server to routing (api)
var express = require('express'); 
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var lodash = require('lodash');
// configure the hosting environment details 
var port = 9119; 
var host= "127.0.0.1";

//create an instance of express 
var app = new express(); 
// I want to allow Cross Origin Resource Sharing 
app.use(function(request,response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();// delegate or function pointer reference to another middleware 
});

//parse the body of the advanced rest client and push to persistent store
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// default root route 
app.get("/", function(request,response){
    response.send("Successfully logged in to Sycliq Server to render Web API");
});


// port and hostname binding to render the web api 
app.listen(port, function(){
    console.log("Hello! you are pinging me at port no http://localhost:9119");
});



//bind the routes to express
var products = require('./apiroutes/product_apiroute.js')(app);

mongoose.connect("mongodb://localhost:27017/ueidb/products");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // it is connected to the mongodb database
    console.log("Successfully connected to MongoDB");
});