import { StringCalculator } from "../string-calculator.mjs";

describe('StringCalculator', () => {
    it('should create', () => {
        const stringCalculator = new StringCalculator();
        const result = stringCalculator.add('')
        expect(result).toBe(0)
    })
})