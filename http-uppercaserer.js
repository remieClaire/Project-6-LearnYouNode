// get the http modules
const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    // receives only POST requests
    if (req.method == 'POST') {

        let result = '';

        req.on('data', function(data) {
            // append each chunk of data to result
            result += data;
        })

        req.on('end', function() {
            // convert result all to upper case
            // close connection & send response back to client
            res.end(result.toUpperCase());
        })
       
    }

})
server.listen(port);
