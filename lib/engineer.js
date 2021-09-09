const inquirer = require('inquirer');
const Employee = require('./employee');

const engineerArray = [];

class Engineer extends Employee {

    constructor(github) {
        super(name, id, email);
        this.github = github;
    }

    engineerPrompt() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is the Engineer's GitHub username?",
                    name: 'github',
                }
            ])
            .then(function(data) {

                this.github = data.github;
                
                const engineer = [name, id, email, github];
                engineerArray.push(engineer);
                employeeArray.push(engineerArray);

                employeePrompt();
            })
    }
}

module.exports = Engineer;