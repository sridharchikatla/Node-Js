(function () {
    //instance in controller
    var corolla = new ns.Vehicle(111, "Toyota", "Hebbal Main Road");

    // binding the object properties to the view
    document.write(corolla.vId);
    document.write(corolla.vName);
    document.write(corolla.vAddress);

})(window.ns)