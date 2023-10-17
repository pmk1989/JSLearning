

const array = [11,3,6,10,43,29,50];
count =0;
function isPrimeNumber(array){
for(let i = 0;i< array.length;i++){
    if(num%i==0){
        return false;
    } 
    else{
        count++;
    }
    count = count + array[i];
}
}
var result = isPrimeNumber(count);
console.log(result);