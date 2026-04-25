const fs = require('fs');
// Prints list of files in a given directory

// Filter by extension of the files

/* This file must do most of the work
 * Module should export a single function that takes three args
 * Callback function must be called using idiomatic node convention
 * Cannot print directly to console, only from original program
 */

// the function export
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
        // if error occurs, return
        if (err) { return callback(err) }

        // convert buffer into string array
        let string = data.toString();

        // split each entry based on comma
        let arr = string.split(',');

        // filter based on extension
        let result = arr.filter( (str) => str.includes("." + ext));

        // return result
        callback(null, result);

    })
 
}
