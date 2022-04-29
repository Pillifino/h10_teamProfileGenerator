// Creates intern subclass 
const Employee = require("./employee") // import super class Employee

class Intern extends Employee {
    constructor(name, idNumber, email, schoolName) {
        super(name, idNumber, email) // uses super class to initialize parameters
        this.shcoolName = schoolName; // initializes parameter exclusive to Intern
    }
    getSchoolName () {
        return this.schoolName;
    }
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;