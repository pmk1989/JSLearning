


console.log("=============================== Assignment D =========================================");

console.log("========================================================================");


class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

console.log("****************TASK - 1******************************");

const arrayTcsEmployees = arrayEmployees.filter( (employee) => {
    return employee.emp_company=='TCS';
 }).map( (employee) => {

   

    console.log("Company Name : ",employee.emp_company," || Employee Name : ", employee.emp_name);
 });
 
console.log("========================================================================");

console.log("****************TASK - 2******************************");

const wiproEmployees = arrayEmployees.filter((employee) => {
    return employee.emp_company === 'Wipro';
  });
  

  const wiproSalaries = wiproEmployees.map((employee) => {
    return employee.emp_salary;
  });
  
  
  let sum = 0;
  wiproSalaries.map((salary) => {
    sum += salary;
  });
  
  
  const averageSalary = wiproSalaries.length > 0 ? sum / wiproSalaries.length : 0;
  
  console.log(`Average salary of employees from Wipro: ${averageSalary}`);
  



console.log("========================================================================");

console.log("****************TASK - 3******************************");

const selectEmployees = arrayEmployees.filter((employee) => {
    return employee.emp_company == 'Wipro' || employee.emp_company == 'Infy';
  });
  
  
  let add = 0;
  let count = 0;
  
  
  selectEmployees.forEach((employee) => {
    add = add + employee.emp_salary;
    count = count + 1;
  });
  
  
  const averageSalaries = count > 0 ? add / count : 0;
  
  console.log(`Average salary of employees from 'Wipro' or 'Infy': ${averageSalaries}`);
  
console.log("========================================================================");
console.log("================================THE END========================================");