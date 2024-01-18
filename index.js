const inquirer = require('inquirer');
const jest = require('jest');
const questions = require ('./library/questions');
const shapes = require ('./library/shapes');
const {Shapes, Circle, Triangle, Square} = require('./library/shapes')
const fs = require('fs')

const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        console.log('creating SVG file');
        switch(data.selectShape){
            case 'square':
                console.log('Square is being created')
                const square = new Square (data.fill, data.text, data.textColor, data.width)
                fs.writeFile("./library/Output/logo.svg", square.render(), (err)=> {
                    if (err) {
                        console.log('error')
                    } else {
                        console.log('Square logo has been created.');
                    }
                });
                break;
                case 'circle':
                    console.log('Circle is being created')
                    const circle = new Circle (data.fill, data.text, data.textColor, data.width)
                    fs.writeFile("./library/Output/logo.svg", circle.render(), (err)=> {
                        if (err) {
                            console.log('error')
                        } else {
                            console.log('Circle logo has been created.');
                        }
        });
        break;
        case 'triangle':
            console.log('Triangle is being created')
            const triangle = new Triangle (data.fill, data.text, data.textColor, data.width)
            fs.writeFile("./library/Output/logo.svg", triangle.render(), (err)=> {
                if (err) {
                    console.log('error')
                } else {
                    console.log('Triangle logo has been created.');
                }
            });
            break;
        }
    });
}

//initialize the application 
init()
