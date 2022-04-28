 // Importing Classes
 const Employee = require("./lib/employee")
 const Engineer = require("./lib/engineer")
 const Intern = require("./lib/intern")
 const Manager = require("./lib/manager")

 const inquirer = require("inquirer")
 const fs = require("fs");;

 //Team Array
 const team = [];

 // Individual Arrays
 const managerArray = [];
 const engineerArray = [];
 const internArray = [];

 //Function To add a Manager
 function buildTeam() {
     inquirer.prompt([
         {
             type: "input",
             message: "What is your managers name?",
             name: "managerName"
         },
         {
             type: "input",
             message: "What is your employee ID number?",
             name: "employeeID"
         },
         {
             type: "input",
             message: "What is your managers email?",
             name: "employeeEmail"
         },
         {
             type: "input",
             message: "What is your managers github Username?",
             name: "employeeGithub"
         },
         {
             type: "checkbox",
             message: "Do you want to add More employees to your team?",
             name: "keepBuildingTeam",
             choices: ["Add Engineer", "Add Intern", "Team Complete"],
         },
     ])
     .then(function(answers){
         const manager = new Manager(answers.nameofManager, answers.employeeID, answers.employeeEmail, answers.employeeGithub);
         team.push(manager);
         
         if (answers.keepBuildingTeam == "Add Engineer") {
             buildEngineer();
         }

         if (answers.keepBuildingTeam == "Add Intern") {
             buildIntern();
         }
     })
 }

 // Function to add an engineer
 function buildEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineers name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is the employee ID number?",
            name: "employeeID",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail",
        },
        {
            type: "input",
            message: "What is their github username?",
            name: "employeeGithub",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Add Engineer", "Add Intern", "Team Complete"],
        },
    ])
    .then(function(answers) {
        const engineer = new Engineer(answers.engineerName, answers.employeeID, answers.employeeEmail, answers.employeeGithub);
        team.push(engineer);

        if (answers.keepBuildingTeam == "Add Engineer") {
            buildEngineer();
        } 
        
        if (answers.keepBuildingTeam == "Add Intern") {
            buildIntern();
        } 
    })
 }

 // Function To an intern
 function buildIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your interns name?",
            name: "nameOfIntern",
        },
        {
            type: "input",
            message: "What is the employee ID number?",
            name: "employeeID",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail",
        },
        {
            type: "input",
            message: "What is their school name?",
            name: "employeeData",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Add Engineer", "Add Intern", "Team Complete"],
        },
    ])
    .then(function(answers) {
        const intern = new Intern(answers.nameOfIntern, answers.employeeID, answers.employeeEmail, answers.employeeData);
        team.push(intern);

        if (answers.keepBuildingTeam == "Add Engineer") {
            buildEngineer();
        } 
        
        if (answers.keepBuildingTeam == "Add Intern") {
            buildIntern();
        } 
    })
 }

 function renderHTML() {
     const teamContent = team(answers); // Takes answers from team array 

     fs.writeFile("./dist/index.html", teamContent,)
 };

 buildTeam();