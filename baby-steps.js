/**
 * Access command line arguments via process object
 * Process object has the property "argv" which is an array containing
 * the complete command-line.
 */
//console.log(process.argv);


let processArr = process.argv;

let index = 2;
let sum = 0;
let hasArgs = false;

/**
 * Loop through array while there are still arguments 
 * and when converting to a string, it is a valid number
 * 
 * isNaN() returns whether or not a given input is NOT a number
 * To check if a number IS a number with isNaN(), its output should be negated
 */

while (index < processArr.length && !isNaN(+processArr[index])) {
    sum += parseInt(processArr[index]);
    index++;
    hasArgs = true;
}

// Print to stdout
if (hasArgs) {
    console.log(sum);
    //process.stdout.write(sum.toString());
}
else {
    console.log();
}
