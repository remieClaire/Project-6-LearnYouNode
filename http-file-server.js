// get the http & filestream modules
const http = require('http');
const fs = require('fs');


// HTTP server that serves same text file for each request
// Listen on port provided
// Location of file given as second CLI arg
// In summary: a HTTP server that sends the contents of a file
// whenever someone connects to it

const port = process.argv[2];
const dir = process.argv[3];

const server = http.createServer(function (req, res) {
    // stream file contents vs reading from a file
    // reading from the stream is more efficient
    fs.createReadStream(dir).pipe(res);

}) 
server.listen(port);
