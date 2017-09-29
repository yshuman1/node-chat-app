var moment = require('moment');

//1/1/70 00:00:00 am = 0

// var date = new Date();
// console.log(date.getMonth());
// var month = ['jan', 'feb'];

var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
