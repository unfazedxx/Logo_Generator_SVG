const { Shapes, Triangle, Square, Circle } = require("../shapes.js")

// Testing for a triangle with a blue background
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle('blue');
    // shape.fill("blue");
    expect(shape.render()).toEqual(
      `<svg version="1.1" width= "500" height= "500" xmlns= "http://www.w3.org/2000/svg"><polygon points="250,60 100,400, 400,400" fill="blue" stroke="#fff" stroke-width="3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="undefined">undefined</text></svg>`)
  });
});