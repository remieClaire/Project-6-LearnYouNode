const fs = require('fs');

// Prints list of files in a given directory
fs.readdir(process.argv[2], (err, list) => {
    
    if (err) {
        console.error(err);
        return;
    }
    // convert to string
    let string = list.toString();

    // split based on comma
    let arr = string.split(',');

    // filter based on file name using includes() and put them into an array
    let result = arr.filter( (str) => str.includes("." + process.argv[3].toString()));

    // print each string in the array individually
    result.forEach( (str) => console.log(str));

});
