var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }
};

var generateLocationMessage = (from, latitade, longitude) => {
    return {
        from,
        url: `http://google.com/maps?q=${latitade},${longitude}`,
        createdAt: moment().valueOf()
    }
};

module.exports = {generateMessage, generateLocationMessage};