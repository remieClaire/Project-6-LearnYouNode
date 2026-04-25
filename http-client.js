// get the http module
const http = require('http');

// store the url in a variable and pass that
const url = process.argv[2];

// perform HTTP GET request to URL
http.get(url, function(response) {
    // removes need to convert stream object to string
    response.setEncoding("utf8");

    // when each chunk of the data stream arrives, just print it out
    response.on('data', function(data) {
        console.log(data);
    })

    // log error to console if one occurs 
    response.on('error', function(err) {
        console.error(err);
    })

})
