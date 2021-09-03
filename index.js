var inquirer = require("inquirer");

console.log("**************************");
console.log("Welcome To My App")
console.log("**************************");



inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "Enter your username",
            name: "username"
        },
        {
            type: "password",
            message: "Enter your password",
            name: "password"
        },
        {
            type: "password",
            message: "re-enter your password",
            mask: "*",
            name: "confirm password"
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log('Welcome Back ', answers.username);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

    //helo