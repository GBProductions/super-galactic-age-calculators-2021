import Calculator from './../src/js/calculator.js';

describe("Calculator", () => {
    let calculator;


    beforeEach(() => {

    });

    test('should show how beforeEach() works', () => {
        console.log(calculator);
    });

    test('should return users age in Earth years', () => {
        calculator = new Calculator (100);
        expect(calculator.earthYear).toEqual(100);
    });

    test('should return users age in Mercury years', () => {
        let planetYear = "Mercury";
        expect(calculator.planetAge(planetYear)).toEqual(42);
    });

    test('should return users age in Venus years', () => {
        let planetYear = "Venus";
        expect(calculator.planetAge(planetYear)).toEqual();
    });

    // test('should return users age in Mercury years', () => {
    //     expect().toEqual();
    // });

    // test('should return users age in Mercury years', () => {
    //     expect().toEqual();
    // });

    // test('should return users age in Mercury years', () => {
    //     expect().toEqual();
    // });

    // test('should return users age in Mercury years', () => {
    //     expect().toEqual();
    // });

    // test('should return users age in Mercury years', () => {
    //     expect().toEqual();
    // });
});