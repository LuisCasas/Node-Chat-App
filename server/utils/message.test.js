var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        
        var from = 'Admin';
        var text = 'Mocha test';
        var res = generateMessage(from, text);

        // expect(res).toInclude({from, text});
        expect(res).toMatchObject({from, text});
        expect(res.from).toBe('Admin');
        expect(res.text).toBe('Mocha test');
        expect(typeof res.createdAt).toBe('number');
    });
});