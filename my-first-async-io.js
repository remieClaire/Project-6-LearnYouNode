const fs = require('fs');

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
