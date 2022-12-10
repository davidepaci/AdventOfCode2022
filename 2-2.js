// create two empty arrays
var arrGeneral = [];
// read a file line by line
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('2/input.txt')
});
// for each line, get the first two characters and push them into the same array
lineReader.on('line', function (line) {
    // get the first character of the line
    var firstChar = line.charAt(0);
    // get the second character of the line
    var secondChar = line.charAt(2);
    // save firstChar and secondChar in an array
    var arr = [firstChar, secondChar];
    // push the array into arr1
    arrGeneral.push(arr);
});
// when the file is read, do the following
lineReader.on('close', async function () {
    console.log(await calculateScores(arrGeneral));
});

// a = rock; b = paper; c = scissors;
// rock (1); paper (2); scissors (3)
// x = lose; y = draw; z = win
// 0 = lost; 3 = draw; 6 = win
async function calculateScores(arrayGeneral) {
    // calculate scores
    var score = 0;
    arrayGeneral.forEach(array => {
        switch(array[0]) {
            case 'A':
                if (array[1] == 'X') {
                    score += 3;
                }
                else if (array[1] == 'Y') {
                    score += 1;
                    score += 3;
                }
                else if (array[1] == 'Z') {
                    score += 2;
                    score += 6;
                }
                break;
            case 'B':
                if (array[1] == 'X') {
                    score += 1;
                }
                else if (array[1] == 'Y') {
                    score += 2;
                    score += 3;
                }
                else if (array[1] == 'Z') {
                    score += 3;
                    score += 6;
                }
                break;
            case 'C':
                if (array[1] == 'X') {
                    score += 2;
                }
                else if (array[1] == 'Y') {
                    score += 3;
                    score += 3;
                }
                else if (array[1] == 'Z') {
                    score += 1;
                    score += 6;
                }
            }
    });
    return score;
}