var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.cuteImage();

};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeIn(1000);
  this.$node.fadeOut(1000);
};


makeBlinkyDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://media0.giphy.com/media/Q6x7wJ2vlP5E1MUn4E/source.gif';
  this.$node.html('<img src =' + imageUrl + ' width= "200" height= "200">');
};