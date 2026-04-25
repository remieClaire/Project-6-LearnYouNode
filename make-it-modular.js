// import the function from mymodule.js
const mymodule = require('./mymodule');

/**
 * Calling the function with the needed arguments:
 * directory, file extension, and callback function.
 * The callback function runs once mymodule is finished
 * and simply prints out the results received from mymodule
 */
mymodule(process.argv[2], process.argv[3], function(err, result) {
    if (err) { return console.error(err) }

    result.forEach( (file) => console.log(file))
})
