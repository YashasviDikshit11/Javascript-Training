// 2. Create a class Shape with properties width and height and methods getArea().
//  Create two classes Rectangle and Triangle that inherit from the Shape class
//  and implement the getArea() method for their respective shapes.
class Shape {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {

    }

};
class Rectangle extends Shape {
    constructor(w, h) {
        super(w, h);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(w, h) {
        super(w, h);
    }
    getArea() {
        return 0.5 * this.width * this.height;
    }
}

const rectObj = new Rectangle(10, 2);
console.log(rectObj.getArea());
const triObj = new Triangle(10, 2);
console.log(triObj.getArea());


