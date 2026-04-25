/**
 * Access command line arguments via process object
 * Process object has the property "argv" which is an array containing
 * the complete command-line.
 */

// create object to hold process.argv array
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
 * 
 * Citing Sources: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN 
 */

while (index < processArr.length && !isNaN(+processArr[index])) {
    // convert string to int and add it to sum
    sum += parseInt(processArr[index]);
    // access object at next index
    index++;
    // being in this loop confirms that arguments were passed
    hasArgs = true;
}

// Print to console
// if there were arguments, print sum as an int
if (hasArgs) {
    console.log(sum);
}
// if there weren't any arguments, print nothing
else {
    console.log();
}
