let sp = String.prototype
let np = Number.prototype
np.__padStart = function() {
  return sp.padStart.call(this, arguments[1], arguments[0])
}
