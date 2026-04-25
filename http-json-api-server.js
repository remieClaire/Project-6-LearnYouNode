const http = require('http');

// HTTP server that serves JSON data upon receiving a GET request
// GET request to path '/api/parsetime'
// request will contain query string with key 'iso' equaling ISO-format time

const path1 = '/api/parsetime';
const path2 = '/api/unixtime';

const port = process.argv[2];

const server = http.createServer(function(req, res) {
    if (req.method == 'GET') {
        // URL(path, base)
        // extract data from URL
        let path = new URL(req.url, 'http://localhost');
    
        // grab just the element we need
        let isoTime = path.search;

        // grab just the text that says the date
        // remove the front part
        isoTime = isoTime.replace('?iso=', '');

        // create a date object to extract information easier
        let date = new Date(isoTime);


        // depending on the pathname, send differently formatted data
        if (path.pathname == path1) {
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds(); 

            // create JSON object with needed data
            let parseTime = { hour: hour, minute: minute, second: second };

            // convert JSON object to string
            let jsonParseTime = JSON.stringify(parseTime);

            // set content type so client knows they are receiving JSON
            // also send successful HTTP status code 200
            res.writeHead(200, { 'Content-Type': 'application/json'})
        
            // send response back 
            res.end(jsonParseTime);
        }
        else if (path.pathname == path2) {
            // grab time in milliseconds
            let milliseconds = date.getTime();
            
            // create JSON object with needed data
            let unixTime = { unixtime: milliseconds };

            // convert JSON object to string
            let jsonUnixTime = JSON.stringify(unixTime);

            // set content type so client knows they are receiving JSON
            // also send successful HTTP status code 200
            res.writeHead(200, { 'Content-Type': 'application/json'})
        
            // send response back 
            res.end(jsonUnixTime);
        }
        
    }
})
server.listen(port);
