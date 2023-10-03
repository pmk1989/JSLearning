
var year = Number;
// program to check leap year
 var checkLeapYear= function(year) {
    //three conditions to find out the leap year
   
    if ((year%4==0) && (year != NaN))  {
        console.log(year + ' is a leap year');
    }
    else if ((year%3!==0) && (year != NaN)) {
        console.log(year + ' is not a leap year');
    } else
    {
        console.log(year + 'is Invalid data ');
    }
    
    }
    
    

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
