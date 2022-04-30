// Employee Super Class

class Employee {
    constructor(name, idNumber, email) {
        this.name = name; // initialize parameter
        this.idNumber = idNumber; // initialize parameter
        this.email = email; // initialize parameter
    }
    getName() {
        return this.name;
    }
    getidNumber() {
        return this.idNumber;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
    render() {
        
    }
}


module.exports = Employee;