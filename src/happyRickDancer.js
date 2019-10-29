var makeHappyRickDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();
  this.step();

};
makeHappyRickDancer.prototype = Object.create(makeDancer.prototype);
makeHappyRickDancer.prototype.constructor = makeHappyRickDancer;
makeHappyRickDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ 'left': '+=800px' }, 2000 );
  this.$node.animate({ 'left': '-=800px' }, 2000 );
};

makeHappyRickDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://media.giphy.com/media/3ov9k1ZNTELhynEI2A/giphy.gif';
  // this.$node.css('background-image', 'url(' + imageUrl + ')');
  this.$node.html('<img src =' + imageUrl + ' width= "150" height= "150">');
};
