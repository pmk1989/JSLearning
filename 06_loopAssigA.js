

console.log(`=============================`);

var str = "I am very good IT Developer";

var count = 0;

var vowelsCap = "AEIOU";

for (let index = 0; index < str.length-1; index++) {

    var char = str.charAt(index).toUpperCase();

    if(vowelsCap.includes(char)){

        count = count + 1;

    }  

}

console.log(`Total number of vowels in string "I am very good IT Developer" is: ${count}`);

console.log("=======================================");

var result = 0;

for (let index = 1; index <=5; index++) {
    result = result + index*index*index;
    
}
console.log(`Sum of cube numbers from 1 to 5 are : ${result}`);

console.log("===============================================");

function oddPositionedChars(str){
    for (let index = 0; index < str.length-1; index++) {

       
        if (index%2!=0 && str.charAt(index) != " " ) {
            
            
            console.log(str.charAt(index));

        }
        
    }
}
console.log("******* Odd positioned character present in given string - 1 is******");
oddPositionedChars("Hard work always pays back");

console.log("******* Odd positioned character present in given string - 2 is******");
oddPositionedChars("Soon I will be UI IT Champ");