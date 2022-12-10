// create two empty arrays
var arr1 = [];
var arr2 = [];
// read a file line by line
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});
// for each line, push the line into the array
lineReader.on('line', function (line) {
    // if the line is empty, push the array into the array
    if (line == '') {
        arr1.push(arr2);
        arr2 = [];
    } else arr2.push(parseInt(line));
});
// when the file is done, push the last array into the array
lineReader.on('close', function () {
    arr1.push(arr2);
});
// when the file is done, print the array
lineReader.on('close', async function () {
    //console.log(arr1)
    //console.log(await sumArrays(arr1));
    // get max value of sumArrays(arr1)
    console.log(Math.max(...await sumArrays(arr1)));
    // get the top 3 max values of sumArrays(arr1) and sum them
    console.log((await sumArrays(arr1)).sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b));
});

async function sumArrays(arrays) { 
    let sumArray = [];
    for (let i = 0; i < arrays.length; i++) {
        let sum = 0;
        for (let j = 0; j < arrays[i].length; j++) {
            sum += arrays[i][j];
        }
        sumArray.push(sum);
    }
    return sumArray;
}