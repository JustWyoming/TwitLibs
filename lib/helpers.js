
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: process.env.twitkey,
    consumer_secret: process.env.twitsecret,
    access_token_key: process.env.twitaccess,
    access_token_secret: process.env.twittoken
});
var pos = require('pos');


module.exports = {
	getTweetWords: function(searchTerm,callback){
		twit.get('search/tweets', {q: searchTerm +'-RT', 'result_type': 'mixed', lang: 'en', count: 20}, function(error, data, response) {
			var twitResults = data.statuses.filter(function(tweet){
				return (tweet.text.indexOf("@") === -1);
			}).map(function(tweet) {
				return tweet.text;
			}).join(' ').split(" ").map(function(word){
				return word.replace('#','').replace('...', '').replace('.', '').replace(',', '').replace('…', '');
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
	}
}




Array.prototype.removeDuplicate = function(){
	var slimTwit = [];
	for(var i = 0; i < this.length; i++){
		if(slimTwit.indexOf(this[i]) == -1) slimTwit.push(this[i]);
	}
	return slimTwit;
}