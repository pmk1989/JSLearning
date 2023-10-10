

console.log("******************************************");

console.log("============================================");
console.log("1. Defined Class for Vehicle");
console.log("============================================");

class Vehicle {

    constructor (companyName, modelName, milage, CC, color){

        this.companyName = companyName;
        this.modelName = modelName;
        this.milage = milage;
        this.CC = CC;
        this.color = color;
    }

}
const vehicle1 = new Vehicle('TATA', "Tata Bolero", '20 kph', '150 CC', 'Orange');
 
const vehicle2 = new Vehicle('TATA', "Safari", '19 kph', '200 cc', 'Blue');

const vehicle3 = new Vehicle('TATA', "LandRover", '10 kph', '350 cc', 'White');

const vehicle4 = new Vehicle('TATA', "Nano", '25 kph', '100 cc', 'Yellow');

const vehicle5 = new Vehicle('TATA', "Harrier", '15 kph', '400 cc', "Black");
 

 console.log("============================================");

const arrayOfVehicle = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
 for (const element of arrayOfVehicle) {
    console.log(element); 
}
console.log("============================================");
console.log("2. Defined Class for College");
console.log("============================================");
class College {

    constructor (collegeName, location, chairman, departments){

        this.collegeName = collegeName;
        this.location = location;
        this.chairman = chairman;
        this.departments = departments;
    }
    display(){

        console.log(`College Name : ${this.collegeName}, ${this.location}, ${this.chairman}, ${this.departments}`);

    }
}

const college1 = new College('Pillais college', "Panvel", 'Vasudevan Pillai' ,"5");

const college2 = new College('D.Y.Patil college', "Belapur(C.B.D)", 'D.Y.PATIL' ,"10");

const college3 = new College('Bharthi Vidyapeeth college', "Kharghar", 'Bharthi' ,"4");

const college4 = new College('ST.Xaviers', "CST", 'Robert' ,"10");


const arrayCollege = [college1,college2,college3,college4];

for (const element of arrayCollege) {

   element.display();

}

console.log("============================================");
console.log("3. Traversing the object of College Class");
console.log("============================================");

function traverseObject(objectPerson){

    for (const key in objectPerson) {
      const element =  key + " : " + objectPerson[key];
      console.log(element);
    }
}

console.log("==================== college 1 ============================");
traverseObject(college1);
console.log("==================college 2==============================");
traverseObject(college2);
console.log("===================college 3=============================");
traverseObject(college3);
console.log("====================college 4============================");
traverseObject(college4);

console.log("====================THE END============================");