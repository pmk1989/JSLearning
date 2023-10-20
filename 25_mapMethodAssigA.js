

console.log("======================= ASSIGNMENT A ========================================");

const arrayNumbers =  [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
            
const addArray = arrayNumbers.map( (currentValue)=> {
     return currentValue + 10;
});
console.log("1. After adding 10 into each element of arrayNumbers : ",addArray);

console.log("===============================================================");

const cubeNum = arrayNumbers.map( (currentValue)=> {
    return currentValue * currentValue * currentValue;
});
console.log("2. After Cubing each element of arrayNumbers : ",cubeNum);

console.log("===============================================================");

const addIndex = arrayNumbers.map( (currentValue, index)=> {
    return currentValue + index;
});
console.log("3. After adding index value into its corresponding each element of arrayNumbers : ",addIndex);

console.log("====================THE END===========================================");