const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');

const html = ``

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
            .then(function(name, id, email, officeNumber) {

                this.officeNumber = data.officeNumber;
                
                fs.writeFile('index.html', html, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            })
    }
}

// module.exports = Manager;