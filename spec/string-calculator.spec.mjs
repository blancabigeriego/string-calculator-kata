import { StringCalculator } from "../string-calculator.mjs";

describe('StringCalculator', () => {
    it('should return a 0 if an empty string is passed as an argument', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('')
        expect(result).toBe(0)
    });
    it('should return the first string if only one argument is passed', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1')
        expect(result).toBe(1)
    });
    it('should add the strings if 2 strings passed as an argument', () =>{
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1', '1')
        expect(result).toBe(2)
    });
    it('should add 3 numbers', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1', '1', '2')
        expect(result).toBe(4)
    });
    it('should add 4 numbers', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1', '1', '2', '2')
        expect(result).toBe(6)
    });
    it('should add up n numbers', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1', '1', '2', '2', '3', '3')
        expect(result).toBe(12)
    });
    it('should allow to separate numbers with chart returns', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('1\n2','3')
        expect(result).toBe(6)
    })

})