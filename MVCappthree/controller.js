(function () {
    //instance in controller
    var prod = new productnamespace.Product(1, " SampleProduct",  500, 'Product description');

    // binding the object properties to the view
    document.write(prod.prodId);
    document.write(prod.prodName);
    document.write(prod.prodPrice);
    document.write(prod.prodDesc);
    
})(window.productnamespace, window.ns);

(function () {
    //instance in controller
    var corolla = new ns.Vehicle(111, "Toyota", "Hebbal Main Road");

    // binding the object properties to the view
    document.write("----------------Name Space two------------");
    document.write(corolla.vId);
    document.write(corolla.vName);
    document.write(corolla.vAddress);

})(window.ns);
 