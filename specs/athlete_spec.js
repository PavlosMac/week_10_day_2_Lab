var athlete = require('../athlete');
var assert = require('assert');

describe('Athlete function', function(){
  it('should have hydration attribute starting at 100', function(){
    assert.equal(100, athlete.hydrationLevel)
  })
  it('should have distance start of zero', function(){
    assert.equal(0, athlete.distance)
  })
  it('should run', function(){
    athlete.run();
    assert.equal(10, athlete.distance)
    assert.equal(90, athlete.hydrationLevel)
  })
  it('should not run when dehydrated', function(){
    athlete.sprint();
    assert.equal("you are dehydrated, drink up", athlete.run())
  })
  it('should be able to increase hydration from drinking water bottle', function(){
    athlete.drink();
    assert.equal(10, athlete.hydrationLevel)
  })
})
