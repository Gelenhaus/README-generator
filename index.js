
const fs = require("fs");
const inquirer = require("inquirer");
var mdInput = '';

let iPrompt = function () {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the title of your project?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'What is this README about?',
            type: 'input'
        },
        {
            name: 'tableOfContents',
            message: 'Give names to your table of contents',
            type: 'input'
        },
        {
            name: 'installation',
            message: 'How do you install this?',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'Is there any usage information to add?',
            type: 'input'
        },
        {
            name: 'license',
            message: 'What license is being used?',
            type: 'input'
        },
        {
            name: 'contribute',
            message: 'What are the contributing guidelines?',
            type: 'input'
        },
        {
            name: 'testInstructions',
            message: 'What are the testing instructions?',
            type: 'input'
        },
        {
            name: 'questions',
            message: 'Do you have any questions?',
            type: 'input'
        },

    ])
        .then(function (answer) {

            let aNew = answer.title;
            let aBew = answer.description;
            fs.writeFile('./MahReadMe.md', aNew + " " + aBew, err => {
                if (err) {
                    console.error(err)
                    return
                }

            })
        });

}

iPrompt();

