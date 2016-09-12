var request = require("request");

var site = "https://www.google.ca/"

function printExampleHTML(website) {
  request(website, function(err, response, body) {
    if (err) {
      throw err;
    }
    // console.log("Response Status Code:", response.statusCode);
    console.log(body)
  });
}

printExampleHTML(site)