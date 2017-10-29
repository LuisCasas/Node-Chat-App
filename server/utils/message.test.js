var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate the correct location message', () => {
        var from = 'Admin';
        var lat = 51.4476532;
        var long = -0.1924903;
        var url = 'http://google.com/maps?q=51.4476532,-0.1924903';

        var message = generateLocationMessage(from, lat, long);
        expect(message).toMatchObject({from, url, });
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
        expect(typeof message.createdAt).toBe('number');
    });
})