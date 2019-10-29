describe('colorDancer', function() {

  var colorDancer, clock;
  var timeBetweenSteps = 200;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new makeColorDancer(20, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a change color function that makes its node change colors', function() {
    sinon.spy(colorDancer.$node, 'toggle');
    colorDancer.step();

    expect(colorDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(colorDancer, 'step');
      expect(colorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(colorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorDancer.step.callCount).to.be.equal(2);
    });
  });
});
