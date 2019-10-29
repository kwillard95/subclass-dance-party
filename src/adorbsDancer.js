var makeAdorbsDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();
  this.step();

};
makeAdorbsDancer.prototype = Object.create(makeDancer.prototype);
makeAdorbsDancer.prototype.constructor = makeAdorbsDancer;
makeAdorbsDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ 'left': '+=100px' }, 'slow' );
  this.$node.animate({ 'left': '-=100px' }, 'slow' );
  // this.$node.animate({ 'top': '+=30px' }, 'slow' );
  // this.$node.animate({ 'top': '-=30px' }, 'slow' );
  // this.$node.slideToggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makeAdorbsDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://thumbs.gfycat.com/TerribleCompetentFieldspaniel-size_restricted.gif';
  // this.$node.css('background-image', 'url(' + imageUrl + ')');
  this.$node.html('<img src =' + imageUrl + ' width= "60" height= "60">');
};


