const questions = [
    // select shape 
    {
        type: 'list',
        name: 'selectShape',
        message: 'Please choose a shape for your logo?',
        choices: ['circle','triangle','square'],
    },
    // enter text 
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for your logo:',
    },
    //enter backround color 
    {
        type: 'input',
        name: 'fill',
        message: 'Please enter a color (or hexcode) for the backround of your logo:',
    },
    //enter text color 
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color (or hexcode) for the text in your logo:',
    },
];

module.exports = questions;