


console.log("============================== Assignment - 2 ================================================");

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

console.log("================================= Task-01 ===============================================================");

const arrayTcsEmployees = arrayEmployees.filter( (employee) => {
    return employee.emp_company=='TCS';
 }).map( (employee) => {

   

    console.log(" Employee Name : ", employee.emp_name);
 });
 
console.log("================================ Task - 02 ================================================================");

const selectEmployeesDept = arrayEmployees.filter((employee) => {
    return employee.emp_dept == 'IT' || employee.emp_dept == 'HR';
  }).map( (employee) => {

   

    console.log(" Employee Name : ", employee.emp_name);
 });
  

console.log("=============================== TASK - 03 =================================================================");

const selectEmployeesId = arrayEmployees.filter((employee) => {
    return employee.emp_id > 50;
  }).map( (employee) => {

   

    console.log(" Employee Name : ", employee.emp_name);
 });

console.log("=============================== TASK - 04 =================================================================");

const selectEmployees = arrayEmployees.filter((employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
  }).map( (employee) => {

   

    console.log(" Employee Name : ", employee.emp_name);
 });

console.log("=============================== TASK - 05 =================================================================");

const selectEmployeesSalaries = arrayEmployees.filter((employee) => {
    return employee.emp_dept == 'IT' || employee.emp_dept == 'HR' || employee.emp_dept == 'Finance';
  });
  
  
  let add = 0;
  let count = 0;
  
  
  selectEmployeesSalaries.forEach((employee) => {
    add = add + employee.emp_salary;
    count = count + 1;
  });
  
  
  const averageSalaries = count > 0 ? add / count : 0;
  
  console.log(`Average salary of employees from all Department is : ${averageSalaries}`);

console.log("============================== TASK - 06 ==================================================================");


const itEmployees = arrayEmployees.filter((employee)=>{ 
    return employee.emp_dept === "IT"
 
 });
 
 
 const totalSalary = itEmployees.reduce((runningTotal, employee) => {
     return runningTotal + employee.emp_salary
 } , 0);
 
 
 const averageSalary = totalSalary / itEmployees.length;
 
 
 console.log("Average Salary of IT Employees: ", averageSalary);

console.log("================================================================================================");

console.log("===================================THE END======================================================");


