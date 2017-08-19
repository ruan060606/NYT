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
  // var headline

}).fail(function(err) {
  throw err;
});

});