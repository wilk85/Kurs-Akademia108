
let employees = {
    "employees": [
        {"firstName": "John", "lastName": "Doe"},
        {"firstName": "Anna", "lastName": "Smith"},
        {"firstName": "Peter", "lastName": "Jones"}
    ]
}

console.log(employees.employees[0].firstName);

employees.employees.forEach(userName =>{
    console.log(userName.firstName);
});

