const https = require("https");
const api = require("./api.json");

// Print out temp details
function printWeather() {
  const message = `current temperature in 
  ${weather.location.citu} is 
  ${weather.current_observation.temp_f}F`;

  console.log(message);
}

// Print out error message
function printError(){
    
}

function get(query) {
    try{
  const request = https.get(
    `https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`,
    (response) => {
      let body = "";
      // Read the data
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        console.log(body);
        const weather = JSON.parse(body);
        //Parse data
        printWeather(weather);
        //Print the data
      });
    }
  );
}catch(error){
    printError(error);
}
}

module.exports.get = get;

//TODO: Handle any errors
