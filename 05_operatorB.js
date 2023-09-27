
console.log("==================PART-01=====================");

function greaterNumber(){

var num1=10;
var num2 = -10;

var result = num1 > num2 ? num1 : num2;
console.log(`In between number ${num1} and ${num2} the greater number is : ${result}`);
}
greaterNumber();

function greaterNumber1(){

    var num1=800;
    var num2 = 899;
    
    var result = num1 > num2 ? num1 : num2;
    console.log(`In between number ${num1} and ${num2} the greater number is : ${result}`);
    }
    greaterNumber1();

    console.log("==================PART-02=====================");

    function isEvenOrOddNum(){

        var num1 = 29;
        var result = num1%2 == 0 ? "EVEN" : "ODD";
        console.log(`Given number is ${num1} ==> ${result}`);

        var num2 = 44;
var result = num2%2 == 0 ? "EVEN" : "ODD";
console.log(`Given number is ${num2} ==> ${result}`);

var num3 = 0;
var result = num3%2 == 0 ? "EVEN" : "ODD";
console.log(`Given number is ${num3} ==> ${result}`);

var num4 = 101;
var result = num4%2 == 0 ? "EVEN" : "ODD";
console.log(`Given number is ${num4} ==> ${result}`);
    }
    isEvenOrOddNum();

    console.log("==================PART-03=====================");

    function wordLength(str){
     
    var lengthOfStr = str.length; 
    var result = lengthOfStr%2 == 0 ? "EVEN" : "ODD";
console.log(`Given word ${str} length is even or odd ==> ${result}`); 
    }
    wordLength("JavaScript");
    wordLength("Developer");
    wordLength("Google");

    console.log("================== END =====================");