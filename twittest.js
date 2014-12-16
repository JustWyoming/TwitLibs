var helpers = require('./lib/helpers');

helpers.getTweetWords('#zombie',function(words){

	var pos = helpers.doPos(words);
	console.log(pos);  
})






	

