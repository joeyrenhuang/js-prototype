import '../src/index.js'
import assert from 'assert'
describe('Math', function(){
  describe('#__safeNumber', function() {
    let formula = getInvalidFormula()
    let wrong = eval(formula)
    let correct = Math.__safeNumber(wrong)
    it(`${formula} should return wrong: ${wrong}, correct: ${correct} `, function() {
      assert.notEqual(wrong, correct)
    });
  });

  describe('#__safeNumber', function() {
    let formula = getValidFormula()
    let wrong = eval(formula)
    let correct = Math.__safeNumber(wrong)
    it(`${formula} should return result: ${wrong}, correct: ${correct} `, function() {
      assert.equal(wrong, correct)
    });
  });

  describe('#__safeCaculate', function() {
    let formula = getInvalidFormula()
    let wrong = eval(formula)
    let correct = Math.__safeCaculate(formula) 

    it(`${formula} and 1000...more should return wrong: ${wrong}, correct: ${correct} `, function() {
      assert.notEqual(wrong, correct)
      for(let i = 0; i < 1000; i++) {
        formula = getInvalidFormula()
        wrong = eval(formula)
        correct = Math.__safeCaculate(formula)
        assert.notEqual(wrong, correct)
      }
      
    });
  });
})

function getInvalidFormula() {
  let x = 0.75
  let y = 0.74
  let z = 0
  let desc = ''
  while (String(z).length <= 15) {
    x = (Math.random() * -1).toFixed(2)
    y = (Math.random() * 1).toFixed(2)
    desc = `${x} + ${y}`
    try {
      z = eval(desc)
    } catch (err) {
    }
  }
  return desc
}

function getValidFormula() {
  let x = 0.75
  let y = 0.74
  let z = 0
  let desc = ''
  while (String(z).length > 15 || z === 0) {
    x = (Math.random() * -1).toFixed(2)
    y = (Math.random() * 1).toFixed(2)
    desc = `${x} + ${y}`
    try {
      z = eval(desc)
    } catch (err) {
    }
  }
  return desc
}


