
console.log("******************************************");

console.log("============= TASK - 1 ================");

let arrayNumbers = [22, 11, 44, 55, 77, 33];
printEven(arrayNumbers);

function printEven(arrayNumbers){
  
  for(let i=0;i<arrayNumbers.length;i++){
    if(i%2 == 0){
      console.log(arrayNumbers[i]);
    }
  }  
}

console.log("============= TASK - 2 ================");

var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];    
}
console.log("Sum of array element = [22, 11, 44, 55, 77, 33] is : ",sum);
console.log("============= END ================");

console.log("**************************************************");