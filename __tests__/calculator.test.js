import Calculator from './../src/js/calculator.js';

describe("Calculator", () => {
    let calculator;


    beforeEach(() => {
        calculator = new Calculator ("test");
    });

    test('should show how beforeEach() works', () => {
        console.log(calculator);
    });

    test('should return the Class Calculator', () => {
        let calculator = new Calculator ("test")
        expect(calculator.test).toEqual("test");
    });
});