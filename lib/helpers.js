
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: process.env.twitkey,
    consumer_secret: process.env.twitsecret,
    access_token_key: process.env.twitaccess,
    access_token_secret: process.env.twittoken
});
var pos = require('pos');
var fillPos = require('./fillpos');
//console.log(fillPos);

module.exports = {
	getTweetWords: function(searchTerm,callback){
		twit.get('search/tweets', {q: searchTerm +'-RT', 'result_type': 'mixed', lang: 'en', count: 200}, function(error, data, response) {

			//console.log(error);
			if (error) throw error;
			var twitResults = data.statuses.filter(function(tweet){
				return true;//(tweet.text.indexOf("@") === -1);
			}).map(function(tweet) {
				return tweet.text;
			}).join(' ').split(" ").map(function(word){
				return word.replace('@','').replace('#','').replace('...', '').replace('.', '').replace(',', '').replace('…', '');
			}).filter(function(word){
				return (word.length > 3 && word.indexOf("://") === -1);
			});

			twitResults = twitResults.removeDuplicate();
			callback(twitResults.join(' '));
		});
	},
	doPos:function(text){
		var words = new pos.Lexer().lex(text);
		var taggedWords = new pos.Tagger().tag(words);
		//console.log(taggedWords);
		var libs = {};
		for(var i = 0; i < taggedWords.length; i++){
			//console.log(taggedWords[i]);
			var tag = taggedWords[i][1];
			var word = taggedWords[i][0];
			if(!libs[tag]){
				libs[tag] = [];
			}
			
			libs[tag].push(word);
		}
		return libs;
	},
	doLib: function(lib,search,callback){
		var samplePost = lib;
		var self = this;
		self.getTweetWords(search,function(words){
			var pos = self.doPos(words);
			pos['searchTerm']=[search];
			for(key in fillPos){

				var whereKey = samplePost.indexOf('[[' + key + ']]');
				while(whereKey > -1){
			  		// console.log(key,whereKey);
			  		var preText = samplePost.substr(0,whereKey);
			  		var postText = samplePost.substr(whereKey + 4 + key.length);
			  		// console.log(preText, postText);
			  		if(pos[key] && pos[key].length > 0){
			  			var myWord = pos[key].shift();
			  		}else {
			  			var myWord = fillPos[key][Math.floor(Math.random() * fillPos[key].length)];
			  		}
			  		samplePost = preText + myWord.toUpperCase() + postText;
			  		whereKey = samplePost.indexOf('[[' + key + ']]')
			  		//pos[key]  //is an array or words
			  	}

			}

			callback(samplePost);
		});		
	}
}




Array.prototype.removeDuplicate = function(){
	var slimTwit = [];
	for(var i = 0; i < this.length; i++){
		if(slimTwit.indexOf(this[i]) == -1) slimTwit.push(this[i]);
	}
	return slimTwit;
}