class RectangleProblem {
    protected _width: number = 0;
    protected _height: number = 0;

    set width(value: number) {
        this._width = value;
    }

    set height(value: number) {
        this._height = value;
    }

    getArea(): number {
        return this._width * this._height;
    }
}

class SquareProblem extends RectangleProblem {
    set width(value: number) {
        this._width = value;
        this._height = value;
    }

    set height(value: number) {
        this._width = value;
        this._height = value;
    }
}

// Função que espera um retângulo
function calculateArea(rect: RectangleProblem) {
    rect.width = 5;
    rect.height = 10;
    console.log(`Área: ${rect.getArea()}`);
}

const rect = new RectangleProblem();
calculateArea(rect); // Área: 50

const square = new SquareProblem();
calculateArea(square); // Esperado 50, mas retorna 100