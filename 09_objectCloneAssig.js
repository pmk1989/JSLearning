
console.log("********************************************");

console.log("1. Created object named [bankSbi]");

const bankSbi = {
    Name : "SBI Bank",
    ifsc  : "SBIN0070807",
    MICR  : "400009017",
    Branch : "070807"
}
console.table(bankSbi);
console.log("********************************************");

console.log("2. Created obect named [ bankLocation ]");

const bankLocation = {
    street : "New Panvel",
    City : "Panvel",
    pin : "410206"
}
console.table(bankLocation);
console.log("********************************************");

console.log("3. Cloned objects [ bankSbi, bankLocation ] into new object [sbiClone]");

const sbiClone = Object.assign({},bankSbi,bankLocation)
console.table(sbiClone);
console.log("********************************************");

console.log("4. Created object name [ rateOfInterest ]");

const rateOfInterest = {
    homeLoanInterest : "7% p.a",
    personalLoanInterest : "13% p.a",
    dueInterest : "14% p.a"
}
console.table(rateOfInterest);
console.log("********************************************");

console.log("5. Merged object [bankSbi, bankLocation, rateOfInterest] into new object [sbiDetails]");

const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log("********************************************");

console.log("6. Transversing the merged object [ sbiDetails ]");


for (const index in sbiDetails) {
    
        const element = index + " : " + sbiDetails[index] ;
        console.log(element);
    
    
}
console.log("****************** THE END **************************");