const inquirer = require('inquirer');
const fs = require('fs');

var html = ``

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

        if(data.choice === 'No More Employees To Add') {

            fs.writeFile('index.html', html, (err) =>
                err ? console.log(err) : console.log('Success!')
            );

        } else if (data.choice === 'Manager') {

            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the Manager's office number?",
                    name: 'officeNumber',
                },
            ])
            .then(function(data) {
                
                fs.writeFile('index.html', html, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            })
            
        } else if (data.choice === 'Engineer') {

            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the Engineer's GitHub username?",
                    name: 'github',
                },
            ]);
            .then(function(data) {
                
                fs.writeFile('index.html', html, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            })

        } else if (data.choice === 'Intern') {

            inquirer.prompt([
                {
                    type: 'input',
                    message: "What school does the Intern attend?",
                    name: 'school',
                },
            ]);
            .then(function(data) {
                
                fs.writeFile('index.html', html, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            })
        }

        if (data.choice === 'Manager' || 'Enginner' || 'Intern') {

            inquirer.prompt();
        }
    })