
console.log('=============Task 1=====================');

const arrayNum = [11,3,4,11,4,7,3];

const uniqueNumber = [...new Set(arrayNum)];

console.log(`Given array is : [11,3,4,11,4,7,3]`);

console.log("After removing duplicate element : ",uniqueNumber);

console.log('=============Task 2=====================');

function alternateText(str){

    var chars = str.split("");

    for (let index = 0; index < chars.length; index = index+2) {
        chars[index] = chars[index].toUpperCase();
        
    }
    return chars.join('');
}
console.log(`Given string value is : How are you mate`);

console.log("Output of the given string is : ",alternateText(`How are you mate`));

console.log("============== THE END ======================");