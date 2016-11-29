var athlete= {
  hydrationLevel: 100,
  distance: 0,
  run: function(){
    if(this.hydrationLevel === 0){
      return "you are dehydrated, drink up";
    }
    else {
    this.distance += 10;
    this.hydrationLevel -= 10;
    }
  },
  sprint: function(){
    this.distance += 100;
    this.hydrationLevel = 0;
  },
  drink: function(){
    this.hydrationLevel += 10;
  }

}

module.exports = athlete;
