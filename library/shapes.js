class Shapes {
    // fill;
    // text;
    // textColor;
//create the parent constructor for the shapes 
    constructor(fill, text, textColor) {
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }

    //setting text for user input, this is called using super below as it is a part of the parent 
    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}"> ${this.text} </text>`;

    }
}

class Circle extends Shapes {
//super refers back to the parent "shapes"
    constuctor(fill, text, textColor){
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;    
    }

    render() {
        return `<svg version="1.1"
        width= "400" height= "400"
        xmlns= "http://www.w3.org/2000/svg">
        <circle r="50" cx="200" cy="200" fill="${this.fill}" stroke="#fff" stroke-width="3"/>  
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="100" fill="${this.textColor}"> ${this.text} </text>      
        </svg>`
    }
}

class Triangle extends Shapes {
    //super refers back to the parent "shapes"
        constuctor(fill, text, textColor){
            this.fill = fill;
            this.text = text;
            this.textColor = textColor;
        }
//we use polygon points (x,y coordinates) to set the dimensions for the square 
        render(){
            return `<svg version="1.1" width= "500" height= "500" xmlns= "http://www.w3.org/2000/svg"><polygon points="250,60 100,400, 400,400" fill="${this.fill}" stroke="#fff" stroke-width="3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text></svg>`
        }
    }

    class Square extends Shapes {
        //super refers back to the parent "shapes"
            constuctor(fill, text, textColor){
                this.fill = fill;
                this.text = text;
                this.textColor = textColor;
            }
    //set standard width, height and color for stroke
            render(){
                return `<svg version="1.1"
                width= "200" height= "300"
                xmlns= "http://www.w3.org/2000/svg">
                <rect width="200" height="300" fill="${this.fill}" stroke="#fff" stroke-width="3"/>      
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}"> ${this.text} </text>
                </svg>`
            }
        }

        // export the classes
        module.exports = {Shapes, Circle, Triangle, Square}