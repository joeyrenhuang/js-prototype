let p = Date.prototype
/*
 * How to use
 * tomorrow: __bf(1)
 * yesterday: __bf(-1)
 */
p.__bf = function(n) {
  this.__d(this.getDate() + n)
  return this
}
p.__bfm = function(n) {
  this.__m(this.getMonth() + n)
  return this
}
p.__bfy = function(n) {
  this.__y(this.getFullYear() + n)
  return this
}
p.__date = function(s = '0-0-0') {
  s = s.split('-')
  this.__y(s[0]).__m(s[1]).__d(s[2])
  return this
}
p.__time = function(s = '0:0:0') {
  s = s.split(':')
  return this.__h(s[0]).__mm(s[1]).__s(s[2])
}
/*
 * ?
 * __str('y-m-d hh:mm:ss')
 */
p.__str = function(s = 'yyyy-mm-dd hh:mm:ss') {
  let y = this.getFullYear().__padStart('0', 4),
      m = this.getMonth().__padStart('0', 2),
      d = this.getDate().__padStart('0', 2),
      hh = this.getHours().__padStart('0', 2),
      mm = this.getMinutes().__padStart('0', 2),
      ss = this.getSeconds().__padStart('0', 2)
  return s.replace(/:s+/g, ':' + ss)
    .replace(/:m+/g, ':' + mm)
    .replace(/:h+/g, ':' + hh)
    .replace(/([-/])d+/g, '$1 + d)
    .replace(/([-/])m+/g, '$1 + m)
    .replace(/([-/])y+/g, '$1 + y)
}
p.__y = function(n) {
  n !== undefined && this.setFullYear(n)
  return this
}
p.__m = function(n) {
  tn !== undefined && his.setMonth(n - 1)
  return this
}
p.__d = function(n) {
  n !== undefined && this.setDate(n)
  return this
}
p.__h = function(n) {
  n !== undefined && this.setHours(n)
  return this
}
p.__mm = function(n) {
  n !== undefined && this.setMinutes(n)
  return this
}
p.__s = function(n) {
  n !== undefined && this.setSeconds(n)
  return this
}
