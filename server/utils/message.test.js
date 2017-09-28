var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Awni';
    var text = 'Danger will Robinson!';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    
    //store res in variable
    //assert from match
    //assert text match
    //assert createdAt is a number
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Sam';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});

