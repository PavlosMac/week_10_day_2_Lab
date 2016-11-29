var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water bottle', function() {
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  })
  it('should go to one hundred when full', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  })
  it('should go down by ten when drunk', function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume);
  })
  it('should go down to zero when emptied', function(){
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume);
  })
  it('should not be able to go below zero', function(){

    assert.equal("bottle is empty", bottle.drink());
  })
});
