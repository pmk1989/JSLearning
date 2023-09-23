
console.log("**************PART - 01****************");

function noArgument1(){
console.log("1. First function with No Argument and No Return. ");
}
noArgument1();

function noArgument2(){
console.log("2. Second function with No Argument and No Return. ");
    }
    noArgument2();

    console.log("**************PART - 02****************");

    function personalDetails(firstName,lastName,collegeName) { 
        console.log("=========Personal Details==============");

        console.log("Full Name : ",firstName,lastName);
        console.log("College Name : ",collegeName);
    }
    personalDetails("PRAMOD","KUMBHAR","V.PILLAI's COLLEGE , NEW PANVEL");

    console.log("**************PART - 03****************");

    function swapValues(valueOne, valueTwo) { // function declaration
        console.log('Before swap : ', valueOne, valueTwo);
        var temp = valueOne;
        valueOne = valueTwo;
        valueTwo = temp;
        console.log('After swap : ', valueOne, valueTwo);
    }
    swapValues("1.1","2.2");
    swapValues("Virat", "Anushka");
    swapValues("1000", "2000");

    console.log("**************PART - 04****************");

function addition(num1,num2,num3){
   var result = num1 + num2 + num3 ; 
   return result;
}
var additionNum = addition(10.23,600,40);
console.log('Addition of 3 values 10.23,600 and 40 : ', additionNum);
var additionNum = addition("Hello"," , Good Morning","!");
console.log("Greeting :" , additionNum);

console.log("************** END ****************");
    
    