


var helpers = require('./lib/helpers');

// helpers.getTweetWords('#zombie',function(words){

// 	var pos = helpers.doPos(words);
// 	console.log(pos);  
// })
	var tweetSearch = "#boyfriend";

  var samplePost = "Last night was [[JJS]] [[JJ]]. My [[searchTerm]] and I were [[VBG]] through a massive [[NN]]. Naturally things escalated quickly, and before long [[NNS]] we were [[VBG]] all over the [[JJ]]. This is why we can’t have anything [[JJ]]."
	//for keys in pos find key
  //find key in samplepost string
  //replace with random item from key
  //replace search term
  //output final post

  helpers.doLib(samplePost,tweetSearch,function(libbed){
	console.log(libbed);
  })



	

