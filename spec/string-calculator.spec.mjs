import { StringCalculator } from "../string-calculator.mjs";

describe('StringCalculator', () => {
    it('should return a 0 if an empty string is passed as an argument', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('')
        expect(result).toBe(0)
    });
    it('should return the first string if only one argument is passed', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add(1)
        expect(result).toBe(1)
    });
    
})