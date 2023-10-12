
console.log("**********************************************");

console.log("1. Create an object bankSbi");

let bankSbi = {

    bankName : 'SBI BANK',
    location : 'Mumbai',
    ifscCode : 'SBIN0986712',
    branchCode : '09876543'
}
console.table(bankSbi);

console.log("2. Create an object bankLocation ");

let bankLocation = {

    street : 'New Panvel',
    city : 'Navi Mumbai',
    pinCode : 410206

}
console.table(bankLocation);

console.log("3. Merge both object bankSbi and bankLocation using 'Object.assign()' and Spread operator ");

const bank = Object.assign(bankSbi,bankLocation);
console.table(bank);

 bankSbi = { ...bankLocation}; 
console.log(bankSbi);

console.log("4. Create an object rateOfInterest");

let rateOfInterest = {

    homeLoanInterest : '7% p.a',
    personalLoanInterest : '13% p.a',
    dueInterest : '14% p.a'
}
console.table(rateOfInterest);

console.log("5. Merge step1,step2 and step4 object into new object sbiDetails");

let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log("6. Transverse step5 using forIn loop");

for (const key in sbiDetails) {

        const element = key + ':' + sbiDetails[key];       
    console.log(element);
}

console.log("******************THE END*************************");
