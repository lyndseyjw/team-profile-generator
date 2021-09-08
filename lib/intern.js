const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');

const html = ``

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
            .then(function(name, id, email, school) {

                this.school = data.school;

                fs.writeFile('index.html', html, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            })
    }
}

// module.exports = Intern;