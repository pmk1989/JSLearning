

console.log("======================== Assignment 1 =====================================");

console.log("========================= TASK-01 =========================================");

const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];

const sum = array_numbers.reduce( (runningTotal, value)=>{

    return runningTotal + value;

}, 0);

console.log("Sum of all numbers using 'reduce()' method : ",sum);

console.log("********************************************************");

var sumTrad = 0;
for (let index = 0; index < array_numbers.length; index++) {
    sumTrad += array_numbers[index];    
}
console.log("Sum of array element using tradational method  : ",sumTrad);

console.log("========================= TASK-02 =========================================");

const arrayMulti = array_numbers.filter( (currentValue) => {
    return currentValue%5==0;
 });
 console.log(" All the numbers which are Multiple of 5 in array_numbers : ",arrayMulti);

 console.log("********************************************************");

 const sumIt = arrayMulti.reduce( (runningTotal, value)=>{

    return runningTotal + value;

}, 0);

console.log("Sum of all numbers which are multiple of 5 using 'reduce()' method : ",sumIt);


console.log("===========================================================================");
console.log("========================= THE END =========================================");