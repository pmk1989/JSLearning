


console.log("========================== Assignment - 03 ===============================================");

console.log("===============================TASK - 01==================================================");

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log("Given array is : ", arrayRollNumbers);

const reverseRollNumbers = arrayRollNumbers.reverse();
console.log("Reverse array is : ", reverseRollNumbers);

console.log("===============================TASK - 02==================================================");

const sortRollNumbers = reverseRollNumbers.sort();
console.log("Sorted array without custom logic is : ", sortRollNumbers);

console.log("===============================TASK - 03==================================================");

const newArray = arrayRollNumbers.sort( (a, b) => {

    return a>b ? 1 : -1;

} );

console.log("Sorted array in ascending order : ",newArray);

console.log("===============================TASK - 04==================================================");

console.log("The Greatest number from the array is : ", newArray[newArray.length-1]);

console.log("===============================TASK - 05==================================================");

console.log("The smallest number from the array is : ", newArray[0]);

console.log("===============================TASK - 06==================================================");

const uniqueArray = [...new Set(newArray)];

console.log("Removed duplicate array : ",uniqueArray);


console.log("==========================================================================================");
console.log("========================== THE END =======================================================");