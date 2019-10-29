var makeAdorbsDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.cuteImage();

};
makeAdorbsDancer.prototype = Object.create(makeDancer.prototype);
makeAdorbsDancer.prototype.constructor = makeAdorbsDancer;
makeAdorbsDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

makeAdorbsDancer.prototype.cuteImage = function() {
  var imageUrl = 'https://thumbs.gfycat.com/TerribleCompetentFieldspaniel-size_restricted.gif';
  this.$node.css('background-image', 'url(' + imageUrl + ')');
};

//https://thumbs.gfycat.com/TerribleCompetentFieldspaniel-size_restricted.gif

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxVN_6MIiDV3lGP3tfz2F6ZHqKX2GkSRg6b734iFBTRiFiCe-Ng&s