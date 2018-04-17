// design pattern
 (function(){
    function Employee(empId, empName){
        this.empId = empId;
        this.empName = empName;

        this.getEmpId = function(){
            return this.empId;
        }

        this.setEmpId = function(eid){
            this.empId = eid;
        }
    }


// instance 
var sridhar = new Employee(11111, "sridhar");
console.log(sridhar);
console.log(sridhar.empId);
console.log(sridhar.getEmpId);
})();