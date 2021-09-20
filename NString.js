let sp = String.prototype
let np = Number.prototype
sp.__padStart = np.__padStart = function() {
  return sp.padStart.call(this, arguments[1], arguments[0])
}
// number to time
np.__tstr = function(s = ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds']) {
  let self = this;
  let ymdhms = [0, 0, 0, 0, 0, 0];
  ['Y', 'M', 'D', 'H', 'MM', 'S'].forEach((x, i) => {
    ymdhms[i] = Math.floor(self / Date['__' + x])
    self = self % Date['__' + x]
  }) 
  return ymdhms.map((x, i) => {
    return x ? x + s[i] || '' : ''
  }).join('')
}
// with commas
sp.__wc = np.__wc = function() {
  let x = String(this)  
  if(!x.match(/^\d+$/)) return this
  return x.replace(/\B(?=(\d{3})+$)/g, ',')
}
