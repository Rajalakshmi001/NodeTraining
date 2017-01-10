var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3a06ace58840494155812920be983ce8';

module.exports = function(callback) {
  request({
  url: url,
  json: true
}, function(error, response, body) {
  if(error) {
    callback("Unable to fetch weather data");
  } else {
    callback("The weather data is " + body.main.temp + " in " + body.name + "!");
  }
});
}
