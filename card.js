const Request = require('./index');

const cardArray = [];

function generateCard(teamArray) {

    for (let i = 0; i < teamArray.length; i++) {

        if (teamArray[i].getRole() === "Manager") {

            cardArray.push(`<div class="card"><div class="heading">
                <h2 class="name">${teamArray[i].getName()}</h2>
                <h3 class="role">Manager</h3>
                </div>
                <hr>
                <div class="content">
                <p class="id">ID : ${teamArray[i].getId()}</p>
                <p class="email">Email : ${teamArray[i].getEmail()}</p>
                <p class="ogs">Office Number : ${teamArray[i].getOfficeNumber()}</p>
                </div></div>`);

        } else if (teamArray[i].getRole() === "Engineer") {

            cardArray.push(`<div class="card"><div class="heading">
                <h2 class="name">${teamArray[i].getName()}</h2>
                <h3 class="role">Engineer</h3>
                </div>
                <hr>
                <div class="content">
                <p class="id">ID : ${teamArray[i].getId()}</p>
                <p class="email">Email : ${teamArray[i].getEmail()}</p>
                <p class="ogs">Github : ${teamArray[i].getGithub()}</p>
                </div></div>`);

        } else if (teamArray[i].getRole() === "Intern") {

            cardArray.push(`<div class="card"><div class="heading">
                <h2 class="name">${teamArray[i].getName()}</h2>
                <h3 class="role">Intern</h3>
                </div>
                <hr>
                <div class="content">
                <p class="id">ID : ${teamArray[i].getId()}</p>
                <p class="email">Email : ${teamArray[i].getEmail()}</p>
                <p class="ogs">Office Number : ${teamArray[i].getSchool()}</p>
                </div></div>`);
        }
    }

    return `<!DOCTYPE html>

        <html lang="en">
        
        <head>
        
            <meta charset="UTF-8">
        
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <link rel="stylesheet" href="./dist/style.css">
        
            <title>Team Profile</title>
        
        </head>
        
        <body>
            <header>
                <h1>MY TEAM</h1>
            </header>

            <section>
                ${cardArray.join('')}
            </section>
        
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src="./index.js"></script>
        </body>
        </html>`
}

module.exports = generateCard;