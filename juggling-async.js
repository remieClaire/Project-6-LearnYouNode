// get the http module
const http = require('http');

// provided with three urls as first three command-line args
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

/* Each url's output needs to be processed in the order they are given.
 * Promises, async, and await were used to produce the intended effect.
 * filterData() holds all of the main logic within a "promise",
 * and will return a promise object when it resolves or rejects.
 * Resolve indicates success and will return the correct string output.
 * Reject indicates failure and will return an error. 
 * 
 * Citing Sources:
 * ASYNC/AWAIT: https://youtu.be/9j1dZwFEJ-c?si=jCHwVPX44IHXDZjb 
 * JS Promises: https://youtu.be/NOzi4wBHn0o?si=UNjSAHbTcoIPQ_BW 
 */

function filterData(url) {

    return new Promise((resolve, reject) => {
        http.get(url, function(response) {
            // removes need to convert stream object to string
            response.setEncoding("utf8");
        
            // string to hold the entire stream of data
            let result = '';
        
            // when each chunk of the data stream arrives, just print it out
            response.on('data', function(data) {
                // append data to string
                result += data;
            })
        
            // once data stream ends, print the entire result
            response.on('end', function() {
                // print out result
                resolve(result);
            })
        
            // log error to console if one occurs 
            response.on('error', function(err) {
                rejects(err);
            })
    
        })

    })

    

}

/* asyncGetData() runs the filterData() function on each url
 * sequentially. The logic is as follows:
 * JS will run the filterData() function on url1 and store
 * the result in request1. request1 will then be printed out.
 * JS will THEN run filterData() on url2 and do the same thing.
 * The main point here is that filterData() will only run
 * on one url at a time, ensuring that the data is filtered and 
 * returned in the correct order.
 */

// this returns a promise object
async function asyncGetData() {

    try {
        const request1 = await filterData(url1);
        console.log(request1);
        const request2 = await filterData(url2);
        console.log(request2);
        const request3 = await filterData(url3);
        console.log(request3);
    }
    catch(error) {
        console.error(error);
    }

}

// call the function
asyncGetData();
