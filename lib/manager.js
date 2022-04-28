// Creates manager subclass

const Employee = require("./employee"); //impport super class Employee

class Manager extends Employee {
    constructor(name, idNumber, email) {
        super(name, idNumber, email); // uses super class to initialize parameters
        this.officNumber = this.officNumber; // initializes parameter exclusive to Manager
    }    
}

module.exports = Manager;