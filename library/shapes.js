class Shapes {
    fill;
    text;
    textColor;
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
        super (fill, text,textColor);
    }

    renderCircle() {
        return `<svg version="1.1"
        width= "500" height= "500"
        xmlns= "https://www.w3org/2000/svg>
        <circle r="200" cx="200" cy="200" fill="${this.fill}" stroke="#fff" stroke-width="3"/>        
        ${super.setText()}
        </svg>`

    }
}

class Triangle extends Shapes {
    //super refers back to the parent "shapes"
        constuctor(fill, text, textColor){
            super (fill, text,textColor);
        }
//we use polygon points (x,y coordinates) to set the dimensions for the square 
        renderTriangle(){
            return `<svg version="1.1"
            width= "500" height= "500"
            xmlns= "https://www.w3org/2000/svg>
            <polygon points="250,60 100,400, 400,400" fill="${this.fill}" stroke="#fff" stroke-width="3"/>        
            ${super.setText()}
            </svg>`
        }
    }

    class Square extends Shapes {
        //super refers back to the parent "shapes"
            constuctor(fill, text, textColor){
                super (fill, text,textColor);
            }
    //set standard width, height and color for stroke
            renderSquare(){
                return `<svg version="1.1"
                width= "500" height= "500"
                xmlns= "https://www.w3org/2000/svg>
                <rect width="200" rect height="200" fill="${this.fill}" stroke="#fff" stroke-width="3"/>      
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}"> ${this.text} </text>
                </svg>`
            }
        }

        // export the classes
        module.exports = {Shapes, Circle, Triangle, Square}