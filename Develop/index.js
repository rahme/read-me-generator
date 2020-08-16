//FILES THAT NPM REQUIRS TO EDIT FILES
const fs = require("fs")
const inquire = require("inquirer")
const generate = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the name of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Please describe your project."
    },
    {
        type:"input",
        name:"installation",
        message:"How do you install your application?"
    },
    {
        type:"input",
        name:"usage",
        message:"How does someone use your application?"
    },
    {
        type:"list",
        name:"license",
        message:"Which licenses apply to your application",
        choices: ["Apache","GPLv3","ISC","MIT"]
    },
    {
        type:"input",
        name:"contribution",
        message:"How would someone contribute to this project?"
    },
    {
        type:"input",
        name:"test",
        message:"How to run a test on this program?"
    },
    {
        type:"input",
        name:"github",
        message:"Please type your Github username."
    },
    {
        type:"input",
        name:"email",
        message:"Please type in your email."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    })
}

// function to initialize program
function init() {
    inquire.prompt(questions).then(function(answers){
        console.log(answers)
        writeToFile("ReadMe.md",generate(answers))
    })
}

// function call to initialize program
init();
