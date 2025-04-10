interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square implements Shape {
    constructor(private side: number) { }

    getArea(): number {
        return this.side * this.side;
    }
}

// Função que trabalha com a interface Shape
function printArea(shape: Shape) {
    console.log(`Área: ${shape.getArea()}`);
}

const rectShape = new Rectangle(5, 10);
const squareShape = new Square(5);

printArea(rectShape);    // Área: 50
printArea(squareShape);  // Área: 25