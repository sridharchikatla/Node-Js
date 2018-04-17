var Company ={}; // => creates directly an instance of object

Company.Name = "Sylciq";
Company.Address = "Cessna Business Park";
Company.CEO ="Syed";

console.log("Company Object" + Company);
console.log(typeof(Company));

console.log("Company Object Properties" + Company.CEO);
console.log("Object Peroperties" + Company["Name"]);


// to check whether the object peroperties exist or not

console.log(Company.hasOwnProperty("CEO")); // returns boolean
