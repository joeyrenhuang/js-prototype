import '../src/index.js'
import assert from 'assert'
describe('NString', function() {
  describe('#__wc()', function() {
    let n = 123456789
    it(`should add commas every 3 chars: ${n} -> ${n.__wc()}`, function() {
      assert.equal(n.__wc(), '123,456,789')
    });
  });
});
