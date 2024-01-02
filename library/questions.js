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
        name: 'enterText',
        message: 'Please enter up to 3 characters for your logo:',
    },
    //enter backround color 
    {
        type: 'input',
        name: 'bgColor',
        message: 'Please enter a color (or hexcode) for the backround of your logo:',
    },
    //enter text color 
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color (or hexcode) for the text of your logo:',
    },
];

module.export(questions);