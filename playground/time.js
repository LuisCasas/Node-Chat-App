const moment = require('moment');

// var date = new Date();

// console.log(date.getMonth());

// var date = moment();
// date.add(10,'y').subtract(4,'months');
// console.log(date.format('MMM YYYY, Do'));

// 7:15 pm
var timestamp = moment().valueOf();
console.log(timestamp);

var createAt = 5432;
var time = moment(createAt);
console.log(time.format('h:mm a'));