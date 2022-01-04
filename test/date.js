import '../src/index.js'
import assert from 'assert'
var fns = ['__bf', '__bfm', '__bfy', '__date', '__time', '__y', '__m', '__d', '__h', '__mm', '__s']
describe('Date', function() {
  let d = new Date();
  describe('#all __fn()', function() {
    it('should return a Date object when calls functions starts with __ on Date object', function() {
      let __typeof = (o) => Object.prototype.toString.call(o).slice(8, -1);
      fns.forEach(x => {
        assert.equal(__typeof(d[x]()), 'Date');
      });
    });
  });
  describe('#__bf()', function(){
    it('should __bf(1) is tomorrow', function() {
      let tm = new Date(d.getTime() + 24 * 3600 * 1000).getDate()
      assert.equal(tm, d.__bf(1).getDate())
    });
    it('should __bf(-1) is yesterday', function() {
      let ye = new Date(d.getTime() - 24 * 3600 * 1000).getDate()
      assert.equal(ye, d.__bf(-1).getDate())
    });
    it('should __bf(20) is next 20 days', function() {
      let tm20 = new Date(d.getTime() + 20 * 24 * 3600 * 1000).getDate()
      assert.equal(tm20, d.__bf(20).getDate())
    });
    it('should __bf(-20) is pre 20 days', function() {
      let ye20 = new Date(d.getTime() - 20 * 24 * 3600 * 1000).getDate()
      assert.equal(ye20, d.__bf(-20).getDate())
    });
  });
  describe('#__str()', function() {
    it('should __str() default get string alike \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}', function() {
      assert.match(d.__str(), /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    });
    it('should __str(h:m:s) default get string alike \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}', function() {
      assert.match(d.__str('h:m:s'), /^\d{2}:\d{2}:\d{2}$/)
    });
    it('should __str(y/m/d) default get string alike \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}', function() {
      assert.match(d.__str('y/m/d'), /^\d{4}\/\d{2}\/\d{2}$/)
    });
  });
  describe('#__tto()', function() {
    it('should __tto() get the countdown tomorrow to now is 1Days', function(){
      assert.equal(new Date().__bf(1).__tto(), '1Days')
    });
  });
});
