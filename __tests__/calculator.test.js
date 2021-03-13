import Calculator from './../src/js/calculator.js';

describe("Calculator", () => {
    let calculator;


    beforeEach(() => {
        calculator = new Calculator (100);
    });

    test('should show how beforeEach() works', () => {
        console.log(calculator);
    });

    test('should return users age in Earth years', () => {
        expect(calculator.earthYear).toEqual(100);
    })
});