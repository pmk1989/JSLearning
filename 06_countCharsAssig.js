

function countCharA(str){

    var count = 0;
    var vowelsCap = "A";

    for (let index = 0; index < str.length-1; index++) {
        
        var char = str.charAt(index).toUpperCase();

        if(vowelsCap.includes(char)){

            count = count + 1;
    
        }  

        
    }
    console.log(`Total number of character 'a' & 'A' available in the string : ${count}`);
}
console.log("================= 1st String Count ==================");

countCharA("I AM Learning JavaScript,The Language of Internet");

console.log("================= 2st String Count ==================");

countCharA("My Favorite movie is LAggAn");

console.log("================= END ==================");

