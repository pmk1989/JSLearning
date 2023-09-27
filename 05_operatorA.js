
console.log("================= PART - 01 =====================");

function squareOfWordLength(str) {
    
    var lengthOfStr = str.length;
    var result = lengthOfStr * lengthOfStr;
    return result;
}
var result = squareOfWordLength("JavaScript");
console.log(`The given string is : "JavaScript" || The square of the string is : ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`The given string is : "Google Chrome" || The square of the string is : ${result}`);

var result = squareOfWordLength("Developer Smart");
console.log(`The given string is : "Developer Smart" || The square of the string is : ${result}`);

console.log("================= PART - 02 =====================");

var str1 = "I am Angular Developer";

function stringLength(){

    var stringLength1 = str1.length;
    console.log("Length of the string : ",stringLength1);
    var words1 = str1.split(" ");
    console.log("Total number of words in the string : ",words1.length);
    var result1 = stringLength1 / words1.length;
    console.log("Length of the string Divided by total number of words in the string gives result : ",result1);
    var result2 = stringLength1 * words1.length;
    console.log(`Length of the string multiply by total number of words is : ${result2}`);

    console.log("================= END =====================");    
    
    
}
stringLength();

