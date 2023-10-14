
const employeeInfo = `{
    "Name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "Doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham st.",
        "city"   : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}`

console.log("1. COnverting String into Object :");

console.log("Current type of employeeInfo is :",typeof employeeInfo);
const employee = JSON.parse(employeeInfo);
console.log("After converting, type of employeeInfo is :",typeof employee);
console.table(employee);

console.log("2. Log on console role ==> 'Dev'");

console.log(employee.role[0]);

console.log("3. Log only the last name ==> 'Melon'");

const myArray = employee.Name.split(" ");
let word = myArray[1];
console.log(word);

console.log("4. Log only joining year of employee :");

const date = new Date("11-12-2019");
let d = date.getFullYear();
console.log(d);

console.log("=====================THE END=================================");