// Creates engineer subclass

const Employee = require("./employee") // import super class Employee

class Engineer extends Employee {
    constructor(name, idNumber, email, gitHubUserName) {
        super(name, idNumber, email) // uses super class to initialize parameters
        this.gitHubUserName = gitHubUserName; // initializes parameter exclusive to Engineer
    }
    getUsername () {
        return this.gitHubUserName;
    }
    getRole () {
        return "Engineer"
    }
}

module.exports = Engineer