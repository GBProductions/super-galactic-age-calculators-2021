import Calculator from './../src/js/calculator.js';

describe("Calculator", () => {

    test('should return users age in Earth years', () => {
        let calculator = new Calculator (100);
        expect(calculator.earthYear).toEqual(100);
    });

    test('should return users age in Mercury years', () => {
        let calculator = new Calculator (100, "Mercury");
        expect(calculator.planetAge()).toEqual(42);
    });

    test('should return users age in Venus years', () => {
        let calculator = new Calculator (100, "Venus");
        expect(calculator.planetAge()).toEqual(62);
    });

    test('should return users age in Mars years', () => {
        let calculator = new Calculator (100, "Mars");
        expect(calculator.planetAge()).toEqual(188);
    });

    test('should return users life left on Jupiter', () => {
        let calculator = new Calculator (100, "Jupiter", 200);
        expect(calculator.planetAge()).toEqual(1186);
    });

    test('should return users life left on Mercury', () => {
        let calculator = new Calculator (100, "Mercury", 200);
        expect(calculator.lifeLeft()).toEqual(42);
    });

    test('should return users life left on Venus', () => {
        let calculator = new Calculator (100, "Venus", 200);
        expect(calculator.lifeLeft()).toEqual(62);
    });

    test('should return users life left on Mars', () => {
        let calculator = new Calculator (100, "Mars", 200);
        expect(calculator.lifeLeft()).toEqual(188);
    });

    test('should return users life left on Jupiter', () => {
        let calculator = new Calculator (100, "Jupiter", 200);
        expect(calculator.lifeLeft()).toEqual(1186);
    });

    test('should return user planet and age', () => {
        let calculator = new Calculator (100, "Jupiter");
        expect(calculator.thisAge()).toEqual();
    });
});