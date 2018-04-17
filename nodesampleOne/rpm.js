// object construction pattern
// es5.0

// object specification or object construct 

function Product(prodId, prodName, prodDesc, prodIsActive){
    this.prodId = prodId;
    this.prodName = prodName;
    this.prodDesc = prodDesc;
    this.prodIsActive = prodIsActive;

    // getter 
    this.getProductId= function(){
        return this.prodId;
    }

    // setter
    this.setProductId = function(pid){
            this.prodId = pid
    }

    // getter 
    this.getProductId= function(){
        return this.prodId;
    }

    // setter
    this.setProductId = function(pid){
            this.prodId = pid
    }

    // getter 
    this.getProductName= function(){
        return this.prodName;
    }

    // setter
    this.setProductName = function(name){
            this.prodName = name
    }

    // getter 
    this.getProductDesc= function(){
        return this.prodDesc;
    }

    // setter
    this.setProductDesc = function(desc){
            this.prodDesc = desc
    }

    // getter 
    this.getProductIsAlive= function(){
        return this.prodIsActive;
    }

    // setter
    this.setProductIsAlive = function(alive){
            this.prodDesc = alive
    }
}


var samsung = new Product(1111, "samsung", "Qualcom", true);
var lg = new Product(1111, "lg", "Qualcom2", true);


// console log
console.log(typeof(Product));  // => type => function
console.log(typeof(samsung)); // type of object 


console.log(samsung.getProductId); // dot operator to fetch object property
console.log(samsung["productName"]) ; // bracket notation to fetch object property 
//this is used when u have special characters

console.log(samsung.hasOwnProperty("productDesc"));

console.log(Object.keys(samsung));
console.log(Object.values(samsung));


// Object.keys (samsung) == peroprties of object
// Object.keys (samsung) == values of object
