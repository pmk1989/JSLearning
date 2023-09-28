
console.log("=================== STEP - 01 =====================");

function maleMarriageEligibility(gender,age,boyName){

    var num = 13;
var result = gender="Male" && age >=21 ?
 `Hey ${boyName} Congratulation!, You are eligible for Marriage.` : `Hey ${boyName} you are not eligible for Marriage , Try next time.`;

    return result;

}
var result = maleMarriageEligibility("Male","25","Bill Gates");
console.log(result);
var result = maleMarriageEligibility("Male","17","Steve Jobs");
console.log(result);

console.log("=================== STEP - 02 =====================");

function femaleMarriageEligibility(gender,age,girlName){

    var num = 13;
var result = gender="Female" && age >=18 ?
 `Hey ${girlName} Congratulation!, You are eligible for Marriage.` : `Hey ${girlName} you are not eligible for Marriage , Try next time.`;

    return result;

}
var result = femaleMarriageEligibility("Female","16","Jennifer Lawrence");
console.log(result);
var result = femaleMarriageEligibility("Female","27","Malinda Gates");
console.log(result);

console.log("=================== END =====================");