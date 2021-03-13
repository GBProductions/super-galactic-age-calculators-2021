import { TestScheduler } from 'jest';
import Calculator from './../src/js/calculator.js';

describe("Calculator", () => {

    test('should return the Class Calculator', () => {
        let calculator = new Calculator ("test")
        expect(calculator.test).toEqual("test");
    });
});