const fs = require('fs');

// Read a file
try {
    // read data & get buffer object
    const buffer = fs.readFileSync(process.argv[2]);

    // convert buffer to a string
    let bufferString = buffer.toString();

    // count number of newlines in string
    let newlineArr = bufferString.split('\n');

    // return number of newlines based on length of array
    /**
     * According to the hint, the array will return one plus
     * the actual number of newlines
     */
    console.log(newlineArr.length - 1);

} 
catch (err) {
    console.error(err);

}



/*
* ASYNC VERSION

let total = 0;

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Convert buffer object to string
    let dataString = data.toString();

    let newlineArr = dataString.split('\n');
    //console.log(newlineArr);
    total = newlineArr.length - 1;

    // Print the number of newlines it contains
    console.log(total);
});
*/
