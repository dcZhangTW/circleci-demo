const sum = require('./math')

describe('test sum', () => {
    test("should return 0 when first params is not number", () => {
        expect(sum('t', 1)).toEqual(0);
    });
    test('should return 0 when second params is not number', () => {
        expect(sum(1, 't')).toEqual(0);
    });
    test('should return sum value when two params is number', () => {
        expect(sum(1, 1)).toEqual(2);
    });
});