

const array = [11,3,6,10,43,29,50];
function isPrime(number){ 
    if(number == 1){
         return false;
     }
    
      var count = 0; 
      for(var i = 1;i*i<=number;i++){
         if(number%i == 0){ 
            count = count + 2; 
        }
     }
      if(count == 2){ return true;
     } 
     else
     {
         return false; 
        }
     } 
     isPrime("Total Count of Prime numbers in array is : ",array);    

console.log("=================================");

var numbers = [11,3,6,10,43,29,50];
var text = ""; 
var i; 
var number;
var count =0; 
 
for (i = 0; i < numbers.length; i++) { 
  
 number = numbers[i]*1; 
 text = text + "The number " + number + " is " + isPrime(number) + " "; 
 text = text  ;
} 
console.log(text,);
 
console.log("===================");

var arr = [11,3,6,10,43,29,50];
   var n = 7;
   var count=0;
   var isprime=0;
   for(var i=0;i<n;i++){
      isprime= isPrime(arr[i]);
      if(isprime==1){
         count++;
   }
   console.log(count);
}