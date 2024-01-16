const inquirer = require('inquirer');
const jest = require('jest');
const questions = require ('./library/questions');
const shapes = require ('./library/shapes');

const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        console.log('creating SVG file');
        switch(`${data.shapes}`){
            case 'Square':
                console.log('Square is being created')
                const square = new Square (data.fill, data.text, data.textcolor, data.width)
                fs.writeFile("library/Output/logo.svg", square.renderSquare(), (err)=> {
                    if (err) {
                        console.log('error')
                    } else {
                        console.log('Square logo has been created.');
                    }
                });
                break;
                case 'Square':
                    console.log('Square is being created')
                    const circle = new Circle (data.fill, data.text, data.textcolor, data.width)
                    fs.writeFile("library/Output/logo.svg", circle.renderCircle(), (err)=> {
                        if (err) {
                            console.log('error')
                        } else {
                            console.log('Circle logo has been created.');
                        }
        });
        case 'Triangle':
            console.log('Triangle is being created')
            const triangle = new Triangle (data.fill, data.text, data.textcolor, data.width)
            fs.writeFile("library/Output/logo.svg", triangle.renderTriangle(), (err)=> {
                if (err) {
                    console.log('error')
                } else {
                    console.log('Circle logo has been created.');
                }
            });
            break;
        }
    });
}

//initialize the application 
init()
