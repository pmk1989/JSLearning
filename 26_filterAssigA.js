


console.log("============================== Assignmnet C ====================================================");

console.log("==================================================================================");

const arrayNumbers =  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayNum = arrayNumbers.filter( (currentValue) => {
    return currentValue > 50;
 });
 console.log("1. All the numbers which are greater than 50 in arrayNumbers : ",arrayNum);

console.log("==================================================================================");

const arrayEvenNumbers =  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayEvenNum = arrayEvenNumbers.filter( (currentValue) => {
    return currentValue%2==0;
 });
 console.log("2. All the numbers which are EVEN in arrayNumbers : ",arrayEvenNum);

console.log("==================================================================================");

const arrayOddNumbers =  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayOddNum = arrayOddNumbers.filter( (currentValue) => {
    return currentValue%2!=0;
 });
 console.log("3. All the numbers which are ODD in arrayNumbers : ",arrayOddNum);

console.log("==================================================================================");

const arrayMultiple =  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayMulti = arrayMultiple.filter( (currentValue) => {
    return currentValue%5==0;
 });
 console.log("4. All the numbers which are Multiple of 5 in arrayNumbers : ",arrayMulti);

console.log("==================================================================================");

const arrayBetween =  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const arrayBet = arrayBetween.filter( (currentValue) => {
    return currentValue > 20 && currentValue < 50;
 });
 console.log("5. All the numbers which are between 20 and 50 in arrayNumbers : ",arrayBet);

console.log("==================================================================================");
console.log("==================================THE END========================================================");