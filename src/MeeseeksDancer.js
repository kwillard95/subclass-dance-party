var makeMeeseeksDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();
  this.step();

};
makeMeeseeksDancer.prototype = Object.create(makeDancer.prototype);
makeMeeseeksDancer.prototype.constructor = makeMeeseeksDancer;
makeMeeseeksDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ 'left': '+=400px' }, 2000 );
  this.$node.animate({ 'left': '-=400px' }, 2000 );
  this.$node.animate({ 'top': '+=800px' }, 2000 );
  this.$node.animate({ 'top': '-=800px' }, 2000 );
};

makeMeeseeksDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://media.giphy.com/media/105fcjJ9jm4XPq/giphy.gif';
  this.$node.html('<img src =' + imageUrl + ' width= "100" height= "100">');
};


