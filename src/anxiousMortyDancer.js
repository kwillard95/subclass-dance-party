var makeAnxiousMortyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();
  this.ghosting();
};
makeAnxiousMortyDancer.prototype = Object.create(makeDancer.prototype);
makeAnxiousMortyDancer.prototype.constructor = makeAnxiousMortyDancer;

makeAnxiousMortyDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://media.giphy.com/media/3ov9k0NCNMUIaq8iiY/giphy.gif';
  this.$node.html('<img src =' + imageUrl + ' width= "100" height= "100">');
};

makeAnxiousMortyDancer.prototype.ghosting = function () {
  this.$node.addClass('ghosting');

};
