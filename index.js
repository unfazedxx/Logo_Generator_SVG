const inquirer = require('inquirer');
const jest = require('jest');
const questions = require ('./library/questions');
const shapes = require ('./library/shapes');

const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
    })
}