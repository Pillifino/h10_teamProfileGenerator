 // Importing Classes
 const Employee = require("./lib/employee")
 const Engineer = require("./lib/engineer")
 const Intern = require("./lib/intern")
 const Manager = require("./lib/manager")

// Importing employee cards (template literals)
const engineerCard = require("./src/engineerCard") // Need to get data pushed from inquirer into teams array and use fswritefile to render html page
const intermCard = require("./src/internCard")
const managerCard = require("./src/managerCard") 

 const inquirer = require("inquirer")
 const fs = require("fs");;

 //Team Array
 const team = [];

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
             message: "What is your managers office number?",
             name: "officeNumber"
         },
         {
             type: "checkbox",
             message: "Do you want to add More employees to your team?",
             name: "keepBuildingTeam",
             choices: ["Add Engineer", "Add Intern", "Team Complete"],
         },
     ])
     .then(function(answers){
         const manager = new Manager(answers.managerName, answers.employeeID, answers.employeeEmail, answers.officeNumber);
         team.push(manager);
         
         if (answers.keepBuildingTeam == "Add Engineer") {
             buildEngineer();
         }
         else if (answers.keepBuildingTeam == "Add Intern") {
             buildIntern();
         } 
         else if(answers.keepBuildingTeam == "Team Complete") {
            console.log(team)
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
        else if (answers.keepBuildingTeam == "Add Intern") {
            buildIntern();
        } 
        else if(answers.keepBuildingTeam == "Team Complete") {
            console.log(team)
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
            name: "schoolName",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Add Engineer", "Add Intern", "Team Complete"],
        },
    ])
    .then(function(answers) {
        const intern = new Intern(answers.nameOfIntern, answers.employeeID, answers.employeeEmail, answers.schoolName);
        team.push(intern);

        if (answers.keepBuildingTeam == "Add Engineer") {
            buildEngineer();
        } 
        else if (answers.keepBuildingTeam == "Add Intern") {
            buildIntern();
        } 
        else if(answers.keepBuildingTeam == "Team Complete") {
            console.log(team)
        }
    })
 }

 function renderHTML() {
     const teamContent = team(answers); // Takes answers from team array 

     fs.writeFile("./dist/index.html", teamContent,)
 };

 buildTeam();