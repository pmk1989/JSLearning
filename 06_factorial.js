

// 3! = 1 * 2 * 3 ==> 6
// 3! = 3 * 2 * 1 ==> 6
// 4! = 4 * 3 * 2 * 1 ==> 24
// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

function factorial(num){
    let factNum = 1; // 60 
    for (let index = num; index >=1; index--) {
       if (factNum%2!=0) {
        factNum = factNum * index;
        console.log(num,"is prime number");
       }
       else{
        console.log("not a prime number");
       }
    }
    console.log(`Factorial of ${num} is ${factNum} `);
}
factorial(11);