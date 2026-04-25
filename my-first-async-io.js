// import filestream module
const fs = require('fs');

let total = 0;

// readFileSync takes in file as first arg and callback function as second arg
fs.readFile(process.argv[2], (err, data) => {
    
    // if an error occurs, log the error and exit the function
    if (err) {
        console.error(err);
        return;
    }

    // Convert buffer object to string
    let dataString = data.toString();

    // split string based on if there is a newline at the end
    // and store each chunk into an array
    let newlineArr = dataString.split('\n');

    // similar to the previous exercise, since the file does not have a newline
    // character at the end, it will end up with one less than the actual total
    total = newlineArr.length - 1;

    // Print the number of newlines it contains
    console.log(total);
});
