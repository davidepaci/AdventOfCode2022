// read file line by line
var lineReader = require("readline").createInterface({
    input: require('fs').createReadStream('3/input.txt')
});
let sum = 0;
// for each line, split the string in half. then, find the letter that appears in both halves
lineReader.on('line', function (line) {
    // get the first half of the line
    var firstHalf = line.substring(0, line.length / 2);
    // get the second half of the line
    var secondHalf = line.substring(line.length / 2, line.length);
    // find the letter that appears in both halves
    var letter = findLetter(firstHalf, secondHalf);
    // print the letter
    console.log(letter);
    // for each letter, print the number it is associated to in the alphabet and alphabet2 objects
    console.log(alphabet[letter] === undefined ? alphabet2[letter] : alphabet[letter]);
    sum += alphabet[letter] === undefined ? alphabet2[letter] : alphabet[letter];
    console.log(sum);
});
// find the letter that appears in both halves
function findLetter(firstHalf, secondHalf) {
    // for each letter in the first half
    for (var i = 0; i < firstHalf.length; i++) {
        // if the letter appears in the second half
        if (secondHalf.includes(firstHalf.charAt(i))) {
            // return the letter
            return firstHalf.charAt(i);
        }
    }
}
// hacky af but works :)
// create an object where the keys are all the letters in the alphabet lowercase and the values go from 1 to 26
var alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};
// create an object where the keys are all the letters in the alphabet uppercase and the values go from 27 to 52
var alphabet2 = {
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
};
