$(document).ready(function() {

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7ca74794a0a64d579de04b287793ce32"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  var results = result.response; 
  console.log(results);
  
  // for (var i = 0; i < Things.length; i++) {
  	
  // }
  var headline = results.docs[0].headline.main;
  console.log(headline);

	var author = results.docs[0].byline.original;
	console.log(author);

}).fail(function(err) {
  throw err;
});

});