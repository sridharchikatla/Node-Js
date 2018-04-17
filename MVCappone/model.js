(function(ns){

    // object construction pattern
    function Vehicle(vId, vName, vAddress){
        this.vId = vId;
        this.vName = vName;        
        this.vAddress = vAddress;

        this.getvId=function(){
            return this.vId;
        }
        this.setvId= function(id){
            this.vId = id;
        }
    }
    ns.Vehicle = Vehicle;
    
})(window.ns);