
console.log("********************** Task-1 ************************************");

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`Total elements in array is : ${arrayNumbers.length}`);

console.log("********************** Task-2 ************************************");

let element0thIndex = arrayNumbers[0];
console.log(`First element in the arrayNumbers is : ${element0thIndex}`);
let element10thIndex = arrayNumbers[10];
console.log(`Last element in the arrayNumbers is :${element10thIndex}`);

console.log("********************** Task-3 ************************************");

console.log(`third last element in array is:  ${arrayNumbers[arrayNumbers.length-3]}`);

console.log("********************** Task-4 ************************************");

console.log("Print all even number in arrayNumbers is :");
for (const index in arrayNumbers) {
    
    if (index%2==0) {
        
       console.log(`${arrayNumbers[index]}`);
    }
}

console.log("********************** Task-5 ************************************");

console.log("Print all odd number in arrayNumbers is :");
for (const index in arrayNumbers) {
    
    if (index%2!=0) {
        
       console.log(`${arrayNumbers[index]}`);
    }
}

console.log("********************** Task-6 ************************************");

var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==0){

        sum = sum + arrayNumbers[index];
        
    }
    
}
console.log(`Addition of all even numbers in arrayNumbers is : ${sum}`);

console.log("********************** Task-7 ************************************");
var sum1=0;
for (let index = 1; index < arrayNumbers.length; index++) {
    if(index%2!=0){

        sum1 = sum1 + arrayNumbers[index];
        
    }
    
}
console.log(`Addition of all odd numbers in arrayNumbers is : ${sum1}`);

console.log("********************** Task-8 ************************************");

var sum1=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    
    sum1 = sum1 + arrayNumbers[index];
           
}
console.log(`Addition of all  numbers in arrayNumbers is : ${sum1}`);

console.log("********************** Task-9 ************************************");

console.log("Numbers which are multiples of 5 in arrayNumbers is :");
arrayNumbers.find(multipleOf5);

function multipleOf5(table5) {
   if (table5 % 5==0 && table5 <=50 ) {

    console.log(table5);
   }
}

multipleOf5(arrayNumbers);
 console.log("********************** Task-10 ************************************");
    const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11];
    var element = arrayNumbers1.includes(115);
    console.log("Number 115 is available in arrayNumbers : ",element);

 console.log("********************** Task-11 ************************************");

 var element = arrayNumbers1.includes(23);
 console.log("Number 23 is available in arrayNumbers : ",element);

 console.log("********************** Task-12 ************************************");

 arrayNumbers.splice(3,0,55,66);
console.log(`Inserted '55' & '66' element before 'index[3]' : ${arrayNumbers}`);

console.log("********************** Task-13 ************************************");

var removedElements = arrayNumbers.splice(4,3);
console.log(`After removing '3' element from array starting from index[4] is : ${arrayNumbers}`);
console.log(`Removed element from array :${removedElements}`);

console.log("********************** END ************************************");




