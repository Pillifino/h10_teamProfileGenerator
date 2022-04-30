// Creates intern subclass 
const Employee = require("./employee") // import super class Employee
const internCard = require("../src/internCard") //import intern card
class Intern extends Employee {
    constructor(name, idNumber, email, schoolName) {
        super(name, idNumber, email) // uses super class to initialize parameters
        this.schoolName = schoolName; // initializes parameter exclusive to Intern
    }
    getSchoolName () {
        return this.schoolName;
    }
    getRole () {
        return "Intern";
    }
    render () {
        return internCard(this)
    }
}

module.exports = Intern;