// import net module
const net = require('net');

const port = process.argv[2];

const server = net.createServer(function (socket) {

    // get date object
    let date = new Date();
    // format date according to specifics 

    /* Some notes:
     * getMonth() is zero-indexed, so you need to add +1 to get the correct month
     */
    let formattedDate = date.getFullYear() + "-0" + (date.getMonth()+1) + "-" + date.getDate();

    // format time according to specifics
    let time = date.getHours() + ":" + date.getMinutes();

    // write to the socket
    socket.write(formattedDate + " " + time + '\n');


    // close socket after done writing
    socket.end();

})
server.listen(port);
