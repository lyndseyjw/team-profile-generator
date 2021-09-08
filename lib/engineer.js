const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');

const html = ``

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
            .then(function(name, id, email, github) {

                this.github = data.github;
                
                fs.writeFile('index.html', html, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            })
    }
}

// module.exports = Engineer;