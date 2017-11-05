const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non string values', () => {
        expect(isRealString(11)).toBeFalsy();
    });

    it('should reject space values only', () => {
        expect(isRealString('   ')).toBeFalsy();
    });

    it('should allow string value', () => {
        expect(isRealString(' test t')).toBeTruthy();
    });
});