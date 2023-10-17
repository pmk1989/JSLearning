




class Bank {

    constructor (bankName, location, account_No, ifsc, interest_rate){

        this.bankName = bankName;
        this.location = location;
        this.account_No = account_No;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }

}
const axis_bank = new Bank('Axis Bank', "Mumbai", '4567890123', 'AX123000', '14%');
 
const sbi_bank = new Bank('Sbi Bank', "Delhi", '5678901234', 'SBIN000123', '10%');

const icici_bank = new Bank('Icici Bank', "Punjab", '1234567890', 'ICIC456780', '18%');

const kotak_bank = new Bank('Kotak Bank', "Mumbai", '0987654321', 'KTK78900000', '15%');

const hdfc_bank = new Bank('Hdfc Bank', "Haryana", '2345678901', 'HDFC0000999', "8%");
 
const punjab_bank = new Bank('Punjab Bank', "Mumbai", '3456789012', 'PUNJ0008765', "12%");

const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);

console.log("======== Account no and object is added in map=========");
const map = new Map();
map.set('4567890123',axis_bank);
map.set('5678901234',sbi_bank);
map.set('1234567890',icici_bank);
map.set('0987654321',kotak_bank);
map.set('2345678901',hdfc_bank);
map.set('3456789012',punjab_bank);
console.log(map);

console.log("=================Transverse the Map========================");

for (const key of setOfBanks) {
    console.log(`Bank Name : ${key.bankName}  Account No : ${key.account_No}  Interest Rate : ${key.interest_rate}`);
}

console.log("=============END===================");


