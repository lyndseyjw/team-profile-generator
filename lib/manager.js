const inquirer = require('inquirer');
const Employee = require('./employee');

const managerArray = [];

class Manager extends Employee {

    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    managerPrompt() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is the Manager's office number?",
                    name: 'officeNumber',
                }
            ])
            .then(function(data) {

                this.officeNumber = data.officeNumber;

                const manager = [name, id, email, officeNumber];
                managerArray.push(manager);
                employeeArray.push(managerArray);
                
                employeePrompt();
            })
    }
}

module.exports = Manager;