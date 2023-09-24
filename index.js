const employee ={
    name : "Ian Maboi",
    streetAddress : "3144 Thika Main St",
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee,[key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee ,key ,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee ={ ...employee};
    delete employee [key];
    return newEmployee;
}
function destructivelyDeletefromEmployeeByKeyAndValue(employee, key){
     const newEmployee = {...employee};
     delete newEmployee[key];
     return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee,"name","Sam smith","456 Elm St");
    console.log(destructivelyUpdatedEmployee);

const employeeWithoutStreet=deleteFromEmployeeByKey(employee, "streetAddress");
    console.log(employeeWithoutStreet);
    
const destructivelyRemovedStreet =destructivelyDeletefromEmployeeByKeyAndValue(employee,"StreetAddress");
    console.log(destructivelyRemovedStreet);    


