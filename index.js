const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];
var choice = '';

class Request {

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


                    fs.writeFile('index.html', `<!DOCTYPE html>

                        <html lang="en">

                        <head>

                            <meta charset="UTF-8">

                            <meta http-equiv="X-UA-Compatible" content="IE=edge">

                            <meta name="viewport" content="width=device-width, initial-scale=1.0">

                            <link rel="stylesheet" href="./style.css">

                            <title>Team Profile</title>

                        </head>

                        <body>
                            <header>
                                <h1>MY TEAM</h1>
                            </header>

                            <div class="card">
                                ${request.generateCard(teamArray)}
                            </div>

                            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
                            <script src="../index.js"></script>
                        </body>
                        </html>`, (err) =>
                        err ? console.log(err) : console.log('Success!')
                    );

                    // if (html) {
                    //     fs.writeFile('index.html', html, (err) =>
                    //         err ? console.log(err) : console.log('Success!')
                    //     );
                    // }

                } else {
                    
                    choice = data.choice;
                    request.employeePrompt();
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

                var employeeArray = [data.name, data.id, data.email];
            
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
                            
                            const manager = new Manager(...employeeArray, data.officeNumber);
                            teamArray.push(manager);
                            request.choicePrompt();
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
                            
                            const engineer = new Engineer(...employeeArray, data.github);
                            console.log(engineer);
                            teamArray.push(engineer);
                            request.choicePrompt();
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
                            
                            const intern = new Intern(...employeeArray, data.school);
                            teamArray.push(intern);
                            request.choicePrompt();
                        })
                }
            })
    }

    generateCard(teamArray) {

        for (let i = 0; i < teamArray.length; i++) {
    
            var card = $('.card');
            
            var headingDiv = $('<div>');
            headingDiv.addClass('heading');
            card.append(headingDiv);
    
            var headingTwo = $('<h2>');
            headingTwo.addClass('name');
            headingTwo.text(teamArray[i].name);
            headingDiv.append(headingTwo);
    
            var headingThree = $('<h3>');
            headingThree.addClass('role');
            headingThree.text(getRole());
            headingDiv.append(headingThree);
    
            var hr = $('<hr>');
            card.append(hr);
    
            var contentDiv = $('<div>');
            contentDiv.addClass('content');
            card.append(contentDiv);
    
            var paragraphOne = $('<p>');
            paragraphOne.addClass('id');
            paragraphOne.text(`ID : ${teamArray[i].id}`);
            contentDiv.append(paragraphOne);
    
            var paragraphTwo = $('<p>');
            paragraphTwo.addClass('email');
            paragraphTwo.text(`Email : ${teamArray[i].email}`);
            contentDiv.append(paragraphTwo);
    
            if (teamArray[i].getRole() === "Manager") {
    
                var paragraphThree = $('<p>');
                paragraphThree.addClass('ogs');
                paragraphThree.text(`Office Number : ${teamArray[i].officeNumber}`);
                contentDiv.append(paragraphThree);
    
            } else if (teamArray[i].getRole() === "Engineer") {
    
                var paragraphThree = $('<p>');
                paragraphThree.addClass('ogs');
                paragraphThree.text(`Github : ${teamArray[i].github}`);
                contentDiv.append(paragraphThree);
    
            } else if (teamArray[i].getRole() === "Intern") {
    
                var paragraphThree = $('<p>');
                paragraphThree.addClass('ogs');
                paragraphThree.text(`School : ${teamArray[i].school}`);
                contentDiv.append(paragraphThree);
            }
        }
    }
}

const request = new Request();
request.choicePrompt();