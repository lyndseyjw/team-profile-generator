const inquirer = require('inquirer');
// const Manager = require('./manager');
// const Engineer = require('./engineer');
// const Intern = require('./intern');

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    employeePrompt() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Which employee type would you like to add?',
                    name: 'choice',
                    choices: ['Manager', 'Engineer', 'Intern', 'No More Employees To Add'],
                },
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

                this.name = data.name;
                this.id = data.id;
                this.email = data.email;

                if (data.choice === 'Manager') {

                    managerPrompt(name, id, email);
                    
                } else if (data.choice === 'Engineer') {

                    engineerPrompt(name, id, email);

                } else if (data.choice === 'Intern') {

                    internPrompt(name, id, email);
                }

                if (data.choice === 'Manager' || 'Enginner' || 'Intern') {

                    const employee = new Employee();
                }
            })
    }
}

module.exports = Employee;