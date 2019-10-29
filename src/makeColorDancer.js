var makeColorDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setColor();

};
makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;
makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.setColor();
  this.$node.toggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};


makeColorDancer.prototype.setColor = function () {

  let redValue = Math.floor((Math.random() * 256));
  let greenValue = Math.floor((Math.random() * 256));
  let blueValue = Math.floor((Math.random() * 256));
  var color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  this.$node.css('border', '20px solid ' + color);

};

