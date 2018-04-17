(function () {
    //instance in controller
    var prod = new productnamespace.Product(1, " SampleProduct",  500, 'Product description');

    // binding the object properties to the view
    document.write(prod.prodId);
    document.write(prod.prodName);
    document.write(prod.prodPrice);
    document.write(prod.prodDesc);
    
    
    document.write("------------------");
    prod.setprodId(2);
    prod.setprodName("Modified Name");
    prod.setprodPrice(1000);
    prod.setprodDesc("Modified description");

    document.write(prod.prodId);
    document.write(prod.prodName);
    document.write(prod.prodPrice);
    document.write(prod.prodDesc);


})(window.productnamespace)