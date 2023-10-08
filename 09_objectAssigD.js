
console.log("*********************************************");

let professor = {

    Name : "Mr.Sanjay Bansal",
    Age  : 67,
    qualification : 'PhD in computers',
    designation : "HOD",
    College  : "Bharthi Vidyapeeth ",
    Degrees : {
        Engineering : 'CSC',
        PHD : 'Adv Computing',
        MBA : 'Information Technology'
    },
    Certificates : ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
    
}
console.log("======================================================");
console.log("1. Added 5 properties : ",professor);
console.log("======================================================");
console.log("2. Included nested object 'Degrees' : ",professor.Degrees);
console.log("======================================================");
console.log("3. Add one array 'Certificates' : ",professor.Certificates);
console.log("======================================================");

professor.totalExperience = "14 years";
console.log("4. Total number of experience : ",professor.totalExperience);
console.log("======================================================");

professor.College = "D.Y.Patil college";
 console.log("5. Modified existing property of 'College' : ",professor);
 console.log("======================================================");
 console.log("6. Add one new certificate at the end of the array :");
professor.Certificates.push("Oracle Certified");
console.log(professor.Certificates);

console.log("======================================================");
console.log("7. log the last element of the array Certificate : ",professor.Certificates[professor.Certificates.length-1]);
console.log("======================================================");
console.log("8. Log complete object : ",professor);
console.log("======================================================");

console.log("Tranverse array of Certificate using 'for of loop' : ");
for (const index of professor.Certificates) { 

        console.log(index);
    
}

console.log("==================== THE END ==================================");
    




