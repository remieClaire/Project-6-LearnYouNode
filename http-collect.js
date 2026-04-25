// get the http module
const http = require('http');

// store the url in a variable and pass that
const url = process.argv[2];

// perform HTTP GET request to URL
http.get(url, function(response) {
    // removes need to convert stream object to string
    response.setEncoding("utf8");

    // string to hold the entire stream of data
    let result = '';

    // when each chunk of the data stream arrives, append it to the string
    response.on('data', function(data) {
        // append data to string
        result += data;
    })

    // once data stream ends, print the entire result
    response.on('end', function() {
        // print out length of string
        console.log(result.length);
        // print out entire result
        console.log(result);
        
    })

    // log error to console if one occurs 
    response.on('error', function(err) {
        console.error(err);
    })

})
