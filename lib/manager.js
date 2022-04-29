// Creates manager subclass

const Employee = require("./employee"); //impport super class Employee

class Manager extends Employee {
    constructor(name, idNumber, email, officeNumber) {
        super(name, idNumber, email); // uses super class to initialize parameters
        this.officNumber = officeNumber; // initializes parameter exclusive to Manager
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Manager"
    }
}

module.exports = Manager;