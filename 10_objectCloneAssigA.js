

console.log("**************************************************");

console.log("== 1.Create object personalDetails =========================");
let personalDetails = {

    Name : 'PRAMOD KUMBHAR',
    age : 34 ,
    Qualification : 'B.sc (Computer Science)',
    Address : 'Panvel',
    pin : 410206

}
console.table(personalDetails);

console.log("== 2.Create object collegeDetails =========================");

let collegeDetails = {

    collegeName : 'Pillais college',
    department : 10,
    chairman : 'Mr.Vasudevan Pillai'
}
console.table(collegeDetails);

console.log("== 3.Merge two object personalDetails and collegeDetails =========================");

const details = Object.assign({},personalDetails,collegeDetails);
console.table(details);

console.log("== 4.Create array friendsName and freeze it =========================");

let friendsName = ['Nitish','Nitin','Naresh','Nikesh','Prem','Sachin'];

console.log(Object.freeze(friendsName));

console.log("== 5.Iterate friendsName array using For of loop =========================");

for (const index in friendsName) {
    
    const element =  friendsName[index] ;
    console.log(element);

}

console.log("== 6.Reverse the string only last word =========================");

const company = 'CodeMind Technology';

let reverse = '';
for (let index = company.length-1; index >=0; index--) {
    let char = company.charAt(index);
    if(char == ' '){

            break;
    }
    else{

        reverse = reverse + char;
    }
    
}
console.log("Reverse the last word of string 'CodeMind Technology' is :",reverse);

console.log("== THE END =========================");