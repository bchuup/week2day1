var http = require("http");

var requestOptions = {
  host: "nodejs.org",
  path: "/api/stream.html"
};

function printExampleHTML(website) {
  http.get(website, (response) => {    // HTTP Response Callback
                response.setEncoding("utf8");             // Use UTF-8 encoding

                response.on("data", function(data) {           // On Data Received
                  console.log("Chunk Received. Length:", data.length);
                  console.log(data);
                });

                response.on("end", function() {                // On Data Completed
                  console.log("Response stream complete.");
                });

              });
}

printExampleHTML(requestOptions)