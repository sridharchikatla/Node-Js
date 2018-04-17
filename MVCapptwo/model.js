(function(productnamespace){

    // object construction pattern
    function Product(prodId, prodName, prodPrice, prodDesc){
        this.prodId = prodId;
        this.prodName = prodName;
        this.prodPrice = prodPrice;
        this.prodDesc = prodDesc;
        
        // get or set product id
        this.getprodId=function(){
            return this.prodId;
        }
        this.setprodId= function(pid){
            this.prodId = pid;
        }

        // get or set product nam
        this.getprodName=function(){
            return this.prodName;
        }
        this.setprodName= function(pname){
            this.prodName = pname;
        }

        // get set product price
        this.getprodPrice=function(){
            return this.prodPrice;
        }
        this.setprodPrice= function(price){
            this.prodPrice = price;
        }

        // get or set product description
        this.getprodDesc=function(){
            return this.prodDesc;
        }
        this.setprodDesc= function(desc){
            this.prodDesc = desc;
        }
    }
    productnamespace.Product = Product;
    
})(window.productnamespace);