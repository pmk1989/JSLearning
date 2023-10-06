
console.log("********************************************************");

console.log("******************** Task - 1 ************************************");

const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];


let element0thIndex = arrayFruits[0];
console.log(`First element in the arrayFruits is : ${element0thIndex}`);
let element4thIndex = arrayFruits[4];
console.log(`Last element in the arrayFruits is :${element4thIndex}`);

console.log("********************** Task-2 **********************************");

arrayFruits.unshift("Papaya");
console.log(`Added element 'Papaya' before 'Banana': ${arrayFruits}`);

console.log("********************** Task-3 **********************************");

var removedElements = arrayFruits.splice(4,1);
console.log(`After removing 'Mango' element from array : ${arrayFruits}`);
console.log(`Removed element from array :${removedElements}`);

console.log("********************** Task-4 **********************************");

arrayFruits.push("Pineapple");
console.log(`Added element 'Pineapple' at last position : ${arrayFruits}`);

console.log("********************** Task-5 **********************************");

arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Inserted 'Dragon Fruit' element before 'Water Melon' : ${arrayFruits}`);

console.log("********************** Task-6 **********************************");

arrayFruits.splice(2, 1, "Kiwi");
console.log(`Replaced 'Orange' element with 'Kiwi' : ${arrayFruits}`);

console.log("********************** Task-7 **********************************");

const arrayElements = arrayFruits.slice(1, 4);
console.log(`logged the element starting from index[1] to index[4] : ${arrayElements}`);

console.log("********************** Task-8 **********************************");

console.log(`last element in arrayFruits is : ${arrayFruits[arrayFruits.length-1]}`);
console.log(`Second last element in array is:  ${arrayFruits[arrayFruits.length-2]}`);
console.log(`third last element in array is:  ${arrayFruits[arrayFruits.length-3]}`);

