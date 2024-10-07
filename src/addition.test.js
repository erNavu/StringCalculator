import addition from './addition'

describe('Calculator', () => {
    test('basic-functionality return the number itself if only one number is provided.', () => {
        expect(addition("")).toBe(0)
        expect(addition("1")).toBe(1)
        expect(addition("12")).toBe(12)
    });
    test('sum of comma separated numbers', () => {
        expect(addition("1,5")).toBe(6)
        expect(addition("10,21")).toBe(31)
    });
    test('newline between numbers', () => {
        expect(addition("1\n2\n3")).toBe(6)
    });
    test('newline-comma-separated support', () => {
        expect(addition("1\n2,3")).toBe(6)
    });
    test('throws an error if having all negative numbers', () => {
        expect(() => { addition("1,-3,3") }).toThrow(Error)
    });
    test('different delimiter support', () => {
        expect(addition("//;\n1;2")).toBe(3)
    });
})



