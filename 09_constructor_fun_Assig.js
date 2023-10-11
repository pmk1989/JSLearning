

console.log("***************************************************");

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
    }

}

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log("====================================================================");
const sbiBank = new Bank('SBI', 'Pune', 'SBIBN00123456', '0123456' );
sbiBank.show();
console.log(`Branch time :- Opening time : ${sbiBank.openTime} and Closing time : ${sbiBank.closeTime}`);
console.log("====================================================================");
const maharashtraBank = new Bank('maharashtra', 'mumbai', 'MAHABN00234578', '0987654');
maharashtraBank.show();
console.log(`Branch time :- Opening time : ${maharashtraBank.openTime} and Closing time : ${maharashtraBank.closeTime}`);
console.log("====================================================================");
const axisBank = new Bank('Axis', 'Mumbai', 'AXIBN00987654', '0978654');
axisBank.show();
console.log(`Branch time :- Opening time : ${axisBank.openTime} and Closing time : ${axisBank.closeTime}`);

console.log("==========================THE END==========================================");


