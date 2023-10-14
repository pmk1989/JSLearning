
var count = 0;
function isPrimeNumber(num){
for (let index = 0; index < 7; index++) {
    
    if(num%index==0){
        return false;
    }
    else{
        return true;
       count = count++;
    }
}
return true;
console.log(count);
}
const result = isPrimeNumber(6);
console.log(`Is number prime : ${result} ${count}`);