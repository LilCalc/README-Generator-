// Include needed packages

const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Start of code for questions required for README
const questions = [ 
    {
        type: "input",
        name: "title",
        message: "What is the title of the Application?"
    },

    {
        type: "input",
        name: "github",
        message: "Enter your Github username."
    },

    {
        type: "input",
        name: "repo",
        message: "Enter the name of your application Github repository."
    },

   {
        type: "input",
        name: "description",
        message: "Briefly describe your application."
    },
    
    {
        type: "input",
        name: "documentation",
        message: "Describe the installation process and intructions."
    },
    
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },

    {
        type: "input",
        name: "screenshot",
        message: "please enter the relative path for your screenshot image."
    },

    {
        type: "input",
        name: "features",
        message: "What are the main features of the application?"
    },

    {
        type: "input",
        name: "acknowledgements",
        message: "Who contributed to this project?"
    },

    {
        type: "list",
        message: "what license are you using?",
        name: "license",
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },
     
      
    {
        type: "input",
        name: "testing",
        message: "What process is used to test this application?"
    },
    
  
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }
        
    ];
// End of questions code

// Initialize the Application
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        
        const markdownString = generateMarkdown(userInput)

        // TODO: Create a function to write README file
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README has been generated')
            }
        })
    },

    )}
    
// Function call to initialize app
init();
