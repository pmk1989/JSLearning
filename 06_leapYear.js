var leapYear =  function(year){
    var result = year;
    if (year==null || year==undefined || year==" " || isNaN(result)) {
        console.log(`Invalid Data: ${year}`);
    } else {
        if ( year%4==0 || year%400==0) {
            console.log(`Given Year is a Leap Year: ${year}`);
        }
        else {
            console.log(`Given Year is not Leap Year : ${year}`);
        }
    }
};
console.log(`==================Leap Year================`);
leapYear(2016);
console.log(`---------------------------------------------------------------`);
leapYear(1999);
console.log(`---------------------------------------------------------------`);
leapYear(1600);
console.log(`---------------------------------------------------------------`);
leapYear(2022);
console.log(`---------------------------------------------------------------`);
leapYear(1945);
console.log(`---------------------------------------------------------------`);
leapYear(null);
console.log(`---------------------------------------------------------------`);
leapYear("Twenty Twenty");
console.log(`---------------------------------------------------------------`);
leapYear(undefined);
console.log(`---------------------------------------------------------------`);
leapYear(NaN);
console.log(`---------------------------------------------------------------`);
leapYear(1750);
console.log(`-------------------------------End--------------------------------`);