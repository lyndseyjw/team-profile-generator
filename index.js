const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employee = new Employee;

employee.choicePrompt();

const employeeArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];
var choice = '';
const html = ``

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    choicePrompt() {

        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Which employee type would you like to add?',
                    name: 'choice',
                    choices: ['Manager', 'Engineer', 'Intern', 'No More Employees To Add'],
                }
            ])
            .then(function(data) {

                if (data.choice === 'No More Employees To Add') {

                    fs.writeFile('index.html', html, (err) =>
                        err ? console.log(err) : console.log('Success!')
                    );

                    process.exit();

                } else {
                    
                    choice = data.choice;
                    const employee = new Employee;
                    employee.employeePrompt();
                    return choice;
                }
            })
    }

    employeePrompt() {

        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is the employee's name?",
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is their ID number?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is their email?',
                    name: 'email',
                },
            ])
            .then(function(data) {

                if (choice === 'Manager') {

                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: "What is the Manager's office number?",
                                name: 'officeNumber',
                            }
                        ])
                        .then(function(data) {

                            const manager = [data.name, data.id, data.email, data.officeNumber];
                            managerArray.push(manager);
                            employeeArray.push(managerArray);
                            
                            const employee = new Employee;
                            employee.choicePrompt();
                        })
                    
                } else if (choice === 'Engineer') {

                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: "What is the Engineer's GitHub username?",
                                name: 'github',
                            }
                        ])
                        .then(function(data) {

                            const engineer = [data.name, data.id, data.email, data.github];
                            engineerArray.push(engineer);
                            employeeArray.push(engineerArray);
                            
                            const employee = new Employee;
                            employee.choicePrompt();
                        })

                } else if (choice === 'Intern') {

                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                message: "What school does the Intern attend?",
                                name: 'school',
                            }
                        ])
                        .then(function(data) {

                            const intern = [data.name, data.id, data.email, data.github];
                            internArray.push(intern);
                            employeeArray.push(internArray);
                            
                            const employee = new Employee;
                            employee.choicePrompt();
                        })
                }
            })
    }
}