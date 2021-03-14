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