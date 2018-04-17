var util = require('util');
util.puts("This is utility package");

setTimeout(function(){
    util.puts("this message is delayed in some seconds")
}, 5000);
