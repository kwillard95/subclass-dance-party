var makeAnxiousMortyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();
  this.step();
};
makeAnxiousMortyDancer.prototype = Object.create(makeDancer.prototype);
makeAnxiousMortyDancer.prototype.constructor = makeAnxiousMortyDancer;
makeAnxiousMortyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var danceLength = Math.random() * 600;
  this.$node.animate({ 'left': '+= ' + danceLength }, 1000 );
  this.$node.animate({ 'left': '-=' + danceLength}, 1000 );
};

makeAnxiousMortyDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://media.giphy.com/media/3ov9k0NCNMUIaq8iiY/giphy.gif';
  this.$node.html('<img src =' + imageUrl + ' width= "100" height= "100">');
};