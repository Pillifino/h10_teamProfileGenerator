// Creates manager subclass

const Employee = require("./employee"); //impport super class Employee
const managerCard = require("../src/managerCard") //Import manager card
class Manager extends Employee {
    constructor(name, idNumber, email, officeNumber) {
        super(name, idNumber, email); // uses super class to initialize parameters
        this.officeNumber = officeNumber; // initializes parameter exclusive to Manager
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Manager"
    }
    render () {
        return managerCard(this)
    }
}

module.exports = Manager;