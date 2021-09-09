const inquirer = require('inquirer');
const Employee = require('./employee');

const internArray = [];

class Intern extends Employee {

    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    internPrompt() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What school does the Intern attend?",
                    name: 'school',
                },
            ])
            .then(function(data) {

                this.school = data.school;

                const intern = [name, id, email, school];
                internArray.push(intern);
                employeeArray.push(internArray);

                employeePrompt();
            })
    }
}

module.exports = Intern;