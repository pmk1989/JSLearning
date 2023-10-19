


console.log("==== 1. No argument and no return value =========");

let arrowFun = ()=> {
    console.log(` Good Evening , Today is thursday `);
}
arrowFun();

console.log("==== 2. 3 arguments and No return Value =========");

let multi = (num1, num2,num3=1)=>{
    console.log(`Multiplication of parameters is: ${num1*num2*num3}`);
}
multi(5,5,2)
multi(10,4)

console.log("==== 3. 5 arguments and return values =========");

let addition = (num1,num2,num3,num4,num5)=>{
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let result = addition(100,100,200,349,756)
console.log(`a. Addition of 5 numbers is : ${result}`);

let result1 = addition('I am ', 'learning ', 'ES6 ', 'features ', 'in depth . ')
console.log(`b. Addition of given words is : ${result1}`);

console.log("==== THE END =========");