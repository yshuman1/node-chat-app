var expect = require('expect');

var {generateMessage} = require('./message');

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