console.log("=============================================");

var greet = "    Hey you are doing good, keep it up     ";

function stringHandsOn(){

    console.log("1. Given a string : ",greet);
    var totalLength = greet.length;
    console.log('2. Length of the string is: ', totalLength);
  
var result = greet.trim();
console.log("3. Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var extraSpace = totalLength - lengthAfterTrim;
console.log('4. Removed extra spaces are: ',extraSpace);

var lastIndexChar = result.charAt(result.length-1);
console.log('5. First character after trim is: ||', result.charAt(0),'|| Last character after trim is: ||', lastIndexChar,"||");

var words = result.split(" ");
console.log('6. Total words is: ', words.length);

console.log("7. Index of word 'good' is : ",result.indexOf('good'));


var resultTwo = result.slice(22, 35);
console.log("8. Substring starting from index 22 is : ",resultTwo);

var result3 = result.includes('up');
console.log("9. Is string ends with word 'up' : ", result3);

var result4 = result.includes('Hey');
console.log("10. Is string starts with word 'Hey' : ", result4);

console.log("=======================================================");





}
stringHandsOn();



